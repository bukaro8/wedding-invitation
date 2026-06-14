import Clock from "./clock.svg";

type IconProps = {
  className?: string;
};

export function ClockIcon({ className }: IconProps) {
  return <Clock aria-hidden="true" className={className} />;
}
