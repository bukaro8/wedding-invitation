"use client";

import { FormEvent, useState } from "react";

type RsvpRecord = {
  id: string;
  fullName: string;
  email: string | null;
  phone: string | null;
  attending: boolean;
  guestsCount: number;
  message: string | null;
  language: string;
  createdAt: string;
};

export default function RsvpAdminPage() {
  const [secret, setSecret] = useState("");
  const [records, setRecords] = useState<RsvpRecord[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const stats = getRsvpStats(records);

  const fetchRsvps = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/rsvp?secret=${encodeURIComponent(secret)}`,
      );

      if (response.status === 401) {
        setError("Invalid admin secret.");
        setRecords([]);
        return;
      }

      if (!response.ok) {
        setError("Unable to load RSVP records.");
        setRecords([]);
        return;
      }

      const data = (await response.json()) as { rsvps?: RsvpRecord[] };
      setRecords(data.rsvps ?? []);
      setHasLoaded(true);
    } catch {
      setError("Unable to connect to the RSVP API.");
      setRecords([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] px-6 py-10 text-[#0b1f3a] sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#607899]">
            Development admin
          </p>
          <h1 className="text-3xl font-semibold text-[#071a33] sm:text-4xl">
            RSVP confirmations
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#42566f]">
            Enter the local admin secret to load RSVP records. The secret is not
            embedded in the frontend code.
          </p>
        </div>

        <form
          onSubmit={fetchRsvps}
          className="mb-8 rounded-3xl border border-[#d8e3f2] bg-white p-5 shadow-xl shadow-[#071a33]/5"
        >
          <label className="block">
            <span className="text-sm font-semibold text-[#071a33]">
              Admin secret
            </span>
            <input
              className="mt-2 w-full rounded-2xl border border-[#c7d6e8] bg-white px-4 py-3 text-sm text-[#071a33] outline-none transition placeholder:text-[#8ca0b9] focus:border-[#153b68] focus:ring-4 focus:ring-[#153b68]/10"
              onChange={(event) => setSecret(event.target.value)}
              placeholder="Enter ADMIN_SECRET"
              type="password"
              value={secret}
            />
          </label>
          <button
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#071a33] px-6 text-sm font-semibold text-white shadow-lg shadow-[#071a33]/20 transition hover:bg-[#123a66] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            disabled={isLoading || !secret}
            type="submit"
          >
            {isLoading ? "Loading..." : "Load RSVPs"}
          </button>
          {error ? (
            <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              {error}
            </p>
          ) : null}
        </form>

        {hasLoaded ? (
          <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Total responses" value={stats.totalResponses} />
            <StatCard label="Attending yes" value={stats.attendingYes} />
            <StatCard label="Attending no" value={stats.attendingNo} />
            <StatCard label="Total guests count" value={stats.totalGuests} />
          </section>
        ) : null}

        <section className="overflow-hidden rounded-3xl border border-[#d8e3f2] bg-white shadow-xl shadow-[#071a33]/5">
          <div className="border-b border-[#e3ebf6] px-5 py-4">
            <h2 className="text-lg font-semibold text-[#071a33]">
              Records {hasLoaded ? `(${records.length})` : ""}
            </h2>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-[#f8fbff] text-xs uppercase tracking-[0.14em] text-[#607899]">
                <tr>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Attending</th>
                  <th className="px-5 py-4">Guests</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Phone</th>
                  <th className="px-5 py-4">Message</th>
                  <th className="px-5 py-4">Language</th>
                  <th className="px-5 py-4">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3ebf6]">
                {records.map((record) => (
                  <tr key={record.id}>
                    <td className="px-5 py-4 font-semibold text-[#071a33]">
                      {record.fullName}
                    </td>
                    <td className="px-5 py-4">
                      {record.attending ? "Yes" : "No"}
                    </td>
                    <td className="px-5 py-4">{record.guestsCount}</td>
                    <td className="px-5 py-4">{record.email || "-"}</td>
                    <td className="px-5 py-4">{record.phone || "-"}</td>
                    <td className="max-w-xs px-5 py-4">
                      {record.message || "-"}
                    </td>
                    <td className="px-5 py-4 uppercase">{record.language}</td>
                    <td className="px-5 py-4">
                      {formatDate(record.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 p-4 md:hidden">
            {records.map((record) => (
              <article
                key={record.id}
                className="rounded-2xl border border-[#e3ebf6] bg-[#f8fbff] p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#071a33]">
                      {record.fullName}
                    </h3>
                    <p className="mt-1 text-sm text-[#42566f]">
                      {formatDate(record.createdAt)}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase text-[#153b68]">
                    {record.language}
                  </span>
                </div>

                <dl className="mt-4 grid gap-3 text-sm">
                  <AdminField
                    label="Attending"
                    value={record.attending ? "Yes" : "No"}
                  />
                  <AdminField
                    label="Guests"
                    value={String(record.guestsCount)}
                  />
                  <AdminField label="Email" value={record.email || "-"} />
                  <AdminField label="Phone" value={record.phone || "-"} />
                  <AdminField label="Message" value={record.message || "-"} />
                </dl>
              </article>
            ))}
          </div>

          {hasLoaded && records.length === 0 ? (
            <p className="px-5 py-8 text-center text-sm text-[#42566f]">
              No RSVP records found.
            </p>
          ) : null}

          {!hasLoaded ? (
            <p className="px-5 py-8 text-center text-sm text-[#42566f]">
              Enter the admin secret to load records.
            </p>
          ) : null}
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl border border-[#d8e3f2] bg-white p-5 shadow-xl shadow-[#071a33]/5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#607899]">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold text-[#071a33]">{value}</p>
    </div>
  );
}

function AdminField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#607899]">
        {label}
      </dt>
      <dd className="mt-1 text-[#071a33]">{value}</dd>
    </div>
  );
}

function getRsvpStats(records: RsvpRecord[]) {
  return records.reduce(
    (stats, record) => {
      stats.totalResponses += 1;
      stats.totalGuests += record.guestsCount;

      if (record.attending) {
        stats.attendingYes += 1;
      } else {
        stats.attendingNo += 1;
      }

      return stats;
    },
    {
      attendingNo: 0,
      attendingYes: 0,
      totalGuests: 0,
      totalResponses: 0,
    },
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
