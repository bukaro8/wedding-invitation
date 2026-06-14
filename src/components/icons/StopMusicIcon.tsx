import StopMusic from "./stop-music-button.svg";

type IconProps = {
  className?: string;
};

export function StopMusicIcon({ className }: IconProps) {
  return <StopMusic aria-hidden="true" className={className} />;
}
