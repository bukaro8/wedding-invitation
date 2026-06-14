import type { ReactNode } from "react";

type WeddingSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function WeddingSection({
  eyebrow,
  title,
  children,
  className = "",
  id,
}: WeddingSectionProps) {
  return (
    <section id={id} className={`px-7 py-20 sm:px-10 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-11 max-w-2xl text-center">
          {eyebrow ? (
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#8f7747]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-script text-7xl font-normal leading-[0.95] text-[#173a5e] sm:text-7xl">
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
      className={`rounded-3xl border border-[#e4d5b8] bg-[#fffdf8] p-7 shadow-xl shadow-[#173a5e]/5 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
