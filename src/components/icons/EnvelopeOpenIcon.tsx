import EnvelopeOpen from "./envolope-open.svg";

type IconProps = {
  className?: string;
};

export function EnvelopeOpenIcon({ className }: IconProps) {
  return <EnvelopeOpen aria-hidden="true" className={className} />;
}
