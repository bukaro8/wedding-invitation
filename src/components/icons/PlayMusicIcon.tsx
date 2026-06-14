import PlayMusic from "./play-music-button.svg";

type IconProps = {
  className?: string;
};

export function PlayMusicIcon({ className }: IconProps) {
  return <PlayMusic aria-hidden="true" className={className} />;
}
