import EnvelopeClosed from "./envolope-close.svg";

type IconProps = {
  className?: string;
};

export function EnvelopeClosedIcon({ className }: IconProps) {
  return <EnvelopeClosed aria-hidden="true" className={className} />;
}
