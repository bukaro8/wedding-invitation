import Frame from "./frame.svg";

type IconProps = {
  className?: string;
};

export function FrameIcon({ className }: IconProps) {
  return <Frame aria-hidden="true" className={className} />;
}
