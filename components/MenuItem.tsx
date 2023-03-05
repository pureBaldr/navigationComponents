import { mixClass } from "@dadmor/pure-baldr-core";
import { MouseEventHandler, ReactNode } from "react";

type Props = {
  className?: string;
  href?: string;
  short?: boolean;
  icon?: JSX.Element;
  active: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler;
}
export const MenuItem: React.FC<Props> = ({
  active = false,
  className = "",
  children,
  icon,
  short = false,
  onClick,
}) => {
  return (
    <a
      onClick={onClick}
      className={mixClass({
        "border-l-[6px] hover:text-primary-500 pl-4 gap-3 transition duration-150 ease-in-out":
          true,
        "flex items-stretch relative py-3": true,
        "pr-20 sm:pr-12 xl:pr-24": short,
        "pr-6": !short,
        "border-primary-600 text-primary-500": active,
        "border-secondary-900 text-white": !active,
        [className]: true,
      })}
    >
      <span className="mb-1">{icon}</span>
      {short && children}
    </a>
  );
};
export default MenuItem;
