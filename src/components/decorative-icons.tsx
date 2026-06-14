type DecorativeIconProps = {
  className?: string;
};

const defaultClassName = "mx-auto mb-5 h-20 w-20 text-[#c9a45c]";

function SvgFrame({
  children,
  className = defaultClassName,
  viewBox = "0 0 120 120",
}: DecorativeIconProps & {
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}

function Flourish() {
  return (
    <>
      <path d="M18 78c14 10 26 10 42 0 16 10 28 10 42 0" />
      <path d="M28 84c9 5 18 5 28 0M64 84c10 5 19 5 28 0" />
    </>
  );
}

export function CalendarOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <path d="M34 30h52a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H34a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8Z" />
      <path d="M26 46h68M42 22v18M78 22v18" />
      <path d="M48 61h24M48 72h15" />
      <path d="M60 12c-9 8-18 8-27 0M60 12c9 8 18 8 27 0" />
      <Flourish />
    </SvgFrame>
  );
}

export function ClockOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <circle cx="60" cy="54" r="28" />
      <path d="M60 34v22l14 9" />
      <path d="M42 18c-8 2-14 8-16 16M78 18c8 2 14 8 16 16" />
      <path d="M44 90l-8 12M76 90l8 12" />
      <path d="M40 54h4M76 54h4M60 38v4M60 66v4" />
      <Flourish />
    </SvgFrame>
  );
}

export function LocationOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <path d="M60 88s28-27 28-50a28 28 0 0 0-56 0c0 23 28 50 28 50Z" />
      <circle cx="60" cy="39" r="10" />
      <path d="M22 92c12-7 24-7 38 0 14-7 26-7 38 0" />
      <path d="M32 101c9-4 18-4 28 0 10-4 19-4 28 0" />
      <path d="M60 8c-7 7-14 7-21 0M60 8c7 7 14 7 21 0" />
    </SvgFrame>
  );
}

export function DressCodeOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <path d="M31 36 21 48l10 9 7-8v43h28V49l7 8 10-9-10-12-15-8-6 13-6-13-15 8Z" />
      <path d="M46 28c3 6 9 6 12 0M52 41v51" />
      <path d="M82 38c-7 10-13 25-17 54h34c-4-29-10-44-17-54Z" />
      <path d="M73 58h18M68 92h28" />
      <path d="M82 38c-4 8-9 11-16 13M82 38c4 8 9 11 16 13" />
    </SvgFrame>
  );
}

export function GiftOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <path d="M28 48h64v42a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6V48Z" />
      <path d="M24 36h72v12H24zM60 36v60" />
      <path d="M60 36c-14-2-22-8-22-16 0-7 9-9 15-4 5 4 7 12 7 20Z" />
      <path d="M60 36c14-2 22-8 22-16 0-7-9-9-15-4-5 4-7 12-7 20Z" />
      <path d="M35 62h50" />
      <Flourish />
    </SvgFrame>
  );
}

export function NoteOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props} viewBox="0 0 96 96">
      <path d="M22 18h52l12 12v48a7 7 0 0 1-7 7H22a7 7 0 0 1-7-7V25a7 7 0 0 1 7-7Z" />
      <path d="M74 18v15h12" />
      <path d="M31 42h35M31 55h43M31 68h28" />
      <path d="M22 10c8 5 16 5 24 0M50 88c8-4 16-4 24 0" />
    </SvgFrame>
  );
}

export function RsvpOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <path d="M30 24h60v72H30z" />
      <path d="M42 44h23M42 62h13M42 80h35" />
      <path d="m64 61 8 8 18-22" />
      <path d="M44 14c5 6 11 6 16 0 5 6 11 6 16 0" />
      <path d="M22 34h8M22 52h8M22 70h8" />
    </SvgFrame>
  );
}

export function TicketOrnament(props: DecorativeIconProps) {
  return (
    <SvgFrame {...props}>
      <path d="M24 38h72v48a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V38Z" />
      <path d="m26 40 34 28 34-28" />
      <path d="M40 28h40" />
      <path d="M44 76h32" />
      <path d="M44 18c5 5 11 5 16 0 5 5 11 5 16 0" />
      <path d="M34 94c8 5 16 5 26 0 10 5 18 5 26 0" />
    </SvgFrame>
  );
}
