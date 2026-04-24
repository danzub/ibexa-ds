import React from "react";
import "./MainMenuItemBase.css";

export type MainMenuItemSize = "Extended" | "Collapsed";
export type MainMenuItemState = "Enabled" | "Hover" | "Selected" | "Opened";

export interface MainMenuItemBaseProps {
  /** Custom icon element (replaces the default icon) */
  icon?: React.ReactNode;
  /** Label text */
  label?: string;
  /** Tooltip text shown on collapsed hover */
  tooltipLabel?: string;
  /** Show dropdown chevron (only in Extended size) */
  showChevron?: boolean;
  /** Show label text */
  showText?: boolean;
  /** Size variant */
  size?: MainMenuItemSize;
  /** Visual state */
  state?: MainMenuItemState;
  /** Additional CSS class */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Mouse enter handler */
  onMouseEnter?: () => void;
  /** Mouse leave handler */
  onMouseLeave?: () => void;
}

const MenuIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="main-menu-item__icon-svg"
  >
    <g transform="translate(2.032, 2.032)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.63731 0.137294C7.82037 -0.0457646 8.11716 -0.0457646 8.30022 0.137294L15.8002 7.63729C15.9343 7.77136 15.9744 7.97297 15.9018 8.14813C15.8293 8.32329 15.6584 8.4375 15.4688 8.4375H13.8021C13.5432 8.4375 13.3333 8.22763 13.3333 7.96875C13.3333 7.70987 13.5432 7.5 13.8021 7.5H14.3371L7.96876 1.13166L1.60043 7.5H2.13543C2.39431 7.5 2.60418 7.70987 2.60418 7.96875C2.60418 8.22763 2.39431 8.4375 2.13543 8.4375H0.468764C0.279172 8.4375 0.108249 8.32329 0.0356952 8.14813C-0.0368584 7.97297 0.00324585 7.77136 0.137307 7.63729L7.63731 0.137294Z"
        fill={color}
      />
    </g>
    <g transform="translate(3.698, 9.532)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.46875 0C0.727633 0 0.9375 0.209867 0.9375 0.46875V6.30208C0.9375 6.61979 1.06371 6.92448 1.28836 7.14914C1.51301 7.37379 1.81771 7.5 2.13542 7.5H10.4688C10.7865 7.5 11.0912 7.37379 11.3158 7.14914C11.5405 6.92448 11.6667 6.61979 11.6667 6.30208V0.46875C11.6667 0.209867 11.8765 0 12.1354 0C12.3943 0 12.6042 0.209867 12.6042 0.46875V6.30208C12.6042 6.86843 12.3792 7.41158 11.9787 7.81205C11.5782 8.21252 11.0351 8.4375 10.4688 8.4375H2.13542C1.56907 8.4375 1.02592 8.21252 0.625449 7.81205C0.224981 7.41158 0 6.86843 0 6.30208V0.46875C0 0.209867 0.209867 0 0.46875 0Z"
        fill={color}
      />
    </g>
    <g transform="translate(7.032, 10.364)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.13542 0.9375C1.81771 0.9375 1.51302 1.06371 1.28836 1.28836C1.06371 1.51302 0.9375 1.81771 0.9375 2.13542V7.13542C0.9375 7.3943 0.727633 7.60417 0.46875 7.60417C0.209867 7.60417 0 7.3943 0 7.13542V2.13542C0 1.56907 0.224981 1.02592 0.625449 0.625449C1.02592 0.224981 1.56907 0 2.13542 0H3.80208C4.36843 0 4.91158 0.224981 5.31205 0.625449C5.71252 1.02592 5.9375 1.56907 5.9375 2.13542V7.13542C5.9375 7.3943 5.72763 7.60417 5.46875 7.60417C5.20987 7.60417 5 7.3943 5 7.13542V2.13542C5 1.81771 4.87379 1.51302 4.64914 1.28836C4.42448 1.06371 4.11979 0.9375 3.80208 0.9375H2.13542Z"
        fill={color}
      />
    </g>
  </svg>
);

const ChevronIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="main-menu-item__chevron-svg"
  >
    <g transform="translate(4.532, 7.032)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.137294 0.137294C0.320352 -0.0457646 0.617148 -0.0457646 0.800206 0.137294L5.46875 4.80584L10.1373 0.137294C10.3204 -0.0457646 10.6171 -0.0457646 10.8002 0.137294C10.9833 0.320352 10.9833 0.617148 10.8002 0.800206L5.80021 5.80021C5.61715 5.98326 5.32035 5.98326 5.13729 5.80021L0.137294 0.800206C-0.0457646 0.617148 -0.0457646 0.320352 0.137294 0.137294Z"
        fill={color}
      />
    </g>
  </svg>
);

const TooltipArrow: React.FC = () => (
  <svg
    width="4"
    height="8"
    viewBox="0 0 4 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4 0L0 4L4 8V0Z" fill="#BA2157" />
  </svg>
);

export const MainMenuItemBase: React.FC<MainMenuItemBaseProps> = ({
  icon,
  label = "Dashboard",
  tooltipLabel = "Label",
  showChevron = true,
  showText = true,
  size = "Extended",
  state = "Enabled",
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isEnabled = state === "Enabled";
  const isHover = state === "Hover";
  const isSelected = state === "Selected";
  const isOpened = state === "Opened";
  const isCollapsed = size === "Collapsed";
  const isExtended = size === "Extended";

  const iconColor = isEnabled || isOpened ? "#ffffff" : "#DC5685";
  const chevronColor = isEnabled || isOpened ? "#ffffff" : isHover ? "#DC5685" : "#ffffff";

  return (
    <div
      role="menuitem"
      aria-selected={isSelected}
      className={[
        "main-menu-item",
        `main-menu-item--size-${size.toLowerCase()}`,
        `main-menu-item--state-${state.toLowerCase()}`,
        className,
      ].join(" ")}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
    >
      <div className="main-menu-item__content">
        <div className="main-menu-item__icon-container">
          {icon || <MenuIcon color={iconColor} />}
        </div>
        {isExtended && showText && (
          <span className="main-menu-item__label">{label}</span>
        )}
      </div>
      {isExtended && showChevron && (
        <div className="main-menu-item__chevron-container">
          <ChevronIcon color={chevronColor} />
        </div>
      )}
      {isHover && isCollapsed && (
        <div className="main-menu-item__tooltip" role="tooltip">
          <div className="main-menu-item__tooltip-arrow">
            <TooltipArrow />
          </div>
          <div className="main-menu-item__tooltip-text">
            <span>{tooltipLabel}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenuItemBase;
