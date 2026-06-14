import CalendarHeart from "./calendar-heart.svg";

type IconProps = {
  className?: string;
};

export function CalendarHeartIcon({ className }: IconProps) {
  return <CalendarHeart aria-hidden="true" className={className} />;
}
