import HeartShine from "./heart-shine.svg";

type IconProps = {
  className?: string;
};

export function HeartShineIcon({ className }: IconProps) {
  return <HeartShine aria-hidden="true" className={className} />;
}
