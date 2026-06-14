import CardEnvelope from "./card-envelope.svg";

type IconProps = {
  className?: string;
};

export function CardEnvelopeIcon({ className }: IconProps) {
  return <CardEnvelope aria-hidden="true" className={className} />;
}
