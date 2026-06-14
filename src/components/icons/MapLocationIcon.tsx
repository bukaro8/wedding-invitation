import MapLocation from "./map-location.svg";

type IconProps = {
  className?: string;
};

export function MapLocationIcon({ className }: IconProps) {
  return <MapLocation aria-hidden="true" className={className} />;
}
