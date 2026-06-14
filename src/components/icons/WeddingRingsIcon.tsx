import WeddingRings from "./wedding-rings.svg";

type IconProps = {
  className?: string;
};

export function WeddingRingsIcon({ className }: IconProps) {
  return <WeddingRings aria-hidden="true" className={className} />;
}
