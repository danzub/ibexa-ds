import React from "react";
import "./Tooltip.css";

export type TooltipType = "Tooltip" | "Alt";

export interface TooltipProps {
  /** Tooltip text label */
  label?: string;
  /** Tooltip variant */
  type?: TooltipType;
  /** Extra CSS class */
  className?: string;
}

const TooltipArrowLeft: React.FC = () => (
  <svg
    width="8"
    height="4"
    viewBox="0 0 8 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="tooltip__arrow-left-svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 0L8 4H0L4 0Z"
      fill="#BA2157"
    />
  </svg>
);

const TooltipArrowTop: React.FC = () => (
  <svg
    width="9"
    height="6"
    viewBox="0 0 9 5.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="tooltip__arrow-top-svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 0L9 4.5L0 4.5L4.5 0Z"
      fill="#CFD0D0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 1.5L8.5 5.5L0.5 5.5L4.5 1.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const Tooltip: React.FC<TooltipProps> = ({
  label = "Label",
  type = "Tooltip",
  className = "",
}) => {
  const isAlt = type === "Alt";

  return (
    <div
      className={[
        "tooltip",
        `tooltip--type-${type.toLowerCase()}`,
        className,
      ].join(" ")}
      role="tooltip"
    >
      {!isAlt && (
        <div className="tooltip__arrow-left">
          <TooltipArrowLeft />
        </div>
      )}
      <div className="tooltip__content">
        <span className="tooltip__label">{label}</span>
      </div>
      {isAlt && (
        <div className="tooltip__arrow-top">
          <TooltipArrowTop />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
