import type { ReactNode } from "react";

type WeddingSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function WeddingSection({
  eyebrow,
  title,
  children,
  className = "",
}: WeddingSectionProps) {
  return (
    <section className={`px-6 py-14 sm:px-10 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#607899]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold text-[#071a33] sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

type InfoCardProps = {
  children: ReactNode;
  className?: string;
};

export function InfoCard({ children, className = "" }: InfoCardProps) {
  return (
    <div
      className={`rounded-3xl border border-[#d8e3f2] bg-white p-6 shadow-xl shadow-[#071a33]/5 ${className}`}
    >
      {children}
    </div>
  );
}
