import DressMan from "./dress-man.svg";
import DressWoman from "./dress-woman.svg";

type DressCodeIconProps = {
  className?: string;
};

export function DressCodeIcon({ className = "h-20 w-28" }: DressCodeIconProps) {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex items-end justify-center gap-2 [&_svg]:h-full [&_svg]:w-auto ${className}`}
    >
      <DressMan className="max-w-[45%]" />
      <DressWoman className="max-w-[48%]" />
    </div>
  );
}
