import {
  mixClass,
  paddingxMix,
  paddingyMix,
  textColorMix,
  textHoverColorMix,
} from "@dadmor/pure-baldr-core";
import { ReactNode } from "react";
import { DimentionsType, ColorType } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  href?: string | any;
  onClick?: any;
  color?: ColorType;
  hoverColor?: ColorType;
  line?: string;
  spacing?: DimentionsType;
  paddingX?: DimentionsType;
  paddingY?: DimentionsType;
  children: ReactNode;
}

export const NavItem: React.FC<Props> = ({
  className = "",
  onClick,
  children,
  color = "primary",
  hoverColor = "primary",
  spacing = null,
  paddingX = null,
  paddingY = null,
}) => {
  return (

      <a
        aria-label="Read more..."
        className={mixClass({
          "text-sm cursor-pointer font-medium transition duration-150 ease-in-out":
            true,
          ...textHoverColorMix(hoverColor),
          ...textColorMix(color),
          ...paddingyMix(paddingY ? paddingY : spacing),
          ...paddingxMix(paddingX ? paddingX : spacing),
          [className]: true,
        })}
        onClick={onClick}
      >
        {children}
      </a>
  );
};
export default NavItem;
