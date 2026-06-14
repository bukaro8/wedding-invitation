import WaxSeal from "./wax-seal.svg";

type IconProps = {
  className?: string;
};

export function WaxSealIcon({ className }: IconProps) {
  return <WaxSeal aria-hidden="true" className={className} />;
}
