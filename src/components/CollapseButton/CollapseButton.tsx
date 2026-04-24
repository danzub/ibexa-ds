import React from "react";
import "./CollapseButton.css";

export type CollapseButtonVariant =
  | "Collapse"
  | "CollapseSecondary"
  | "CollapseFocus"
  | "Expand"
  | "ExpandFocus"
  | "ExpandIconFocus";

export interface CollapseButtonProps {
  /** Button variant */
  variant?: CollapseButtonVariant;
  /** Label text (only for Collapse variants) */
  label?: string;
  /** Extra CSS class */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

const CollapseArrow: React.FC<{ color?: string }> = ({ color = "#6E7173" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(4.534, 4.531)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.13809 0.1365C0.321586 -0.0461189 0.618381 -0.0454072 0.801 0.13809C1.26686 0.606188 1.8874 1.21834 2.54871 1.87071C3.71404 3.02029 5.00598 4.29477 5.8012 5.12595C5.97709 5.3098 5.97421 5.60039 5.7947 5.78071C5.04367 6.53513 4.02697 7.55709 3.04144 8.55816C2.04895 9.56597 1.08854 10.5416 0.801 10.8332C0.618381 11.0167 0.321586 11.0174 0.13809 10.8339C-0.0461189 10.6497 -0.0454072 10.3529 0.13809 10.1693C0.421584 9.88456 1.37497 8.91626 2.36365 7.91288C3.3603 6.90139 4.39197 5.8655 5.13809 5.11276C4.38877 4.36468 3.35288 3.32879 2.34871 2.31388C1.35288 1.30732 0.389584 0.333441 0.13809 0.0841189C-0.0454072 -0.0993781 -0.0461189 -0.396173 0.13809 -0.57967C0.321586 -0.763167 0.618381 -0.762456 0.801 -0.578959C1.26686 -0.110862 1.8874 0.501291 2.54871 1.15366C3.71404 2.30324 5.00598 3.57772 5.8012 4.40891C5.97709 4.59275 5.97421 4.88334 5.7947 5.06367C5.04367 5.81809 4.02697 6.84005 3.04144 7.84112L0.13809 10.8339C-0.0461189 10.6497 -0.0454072 10.3529 0.13809 10.1693L0.13809 0.1365Z"
        fill={color}
      />
    </g>
    <g transform="translate(9.531, 4.531)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.46875 0C0.727633 0 0.9375 0.209867 0.9375 0.46875V10.4688C0.9375 10.7276 0.727633 10.9375 0.46875 10.9375C0.209867 10.9375 0 10.7276 0 10.4688V0.46875C0 0.209867 0.209867 0 0.46875 0Z"
        fill={color}
      />
    </g>
  </svg>
);

const ExpandArrow: React.FC<{ color?: string }> = ({ color = "#6E7173" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(9.531, 4.531) scale(-1, 1)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.13809 0.1365C0.321586 -0.0461189 0.618381 -0.0454072 0.801 0.13809C1.26686 0.606188 1.8874 1.21834 2.54871 1.87071C3.71404 3.02029 5.00598 4.29477 5.8012 5.12595C5.97709 5.3098 5.97421 5.60039 5.7947 5.78071C5.04367 6.53513 4.02697 7.55709 3.04144 8.55816C2.04895 9.56597 1.08854 10.5416 0.801 10.8332C0.618381 11.0167 0.321586 11.0174 0.13809 10.8339C-0.0461189 10.6497 -0.0454072 10.3529 0.13809 10.1693C0.421584 9.88456 1.37497 8.91626 2.36365 7.91288C3.3603 6.90139 4.39197 5.8655 5.13809 5.11276C4.38877 4.36468 3.35288 3.32879 2.34871 2.31388C1.35288 1.30732 0.389584 0.333441 0.13809 0.0841189C-0.0454072 -0.0993781 -0.0461189 -0.396173 0.13809 -0.57967C0.321586 -0.763167 0.618381 -0.762456 0.801 -0.578959C1.26686 -0.110862 1.8874 0.501291 2.54871 1.15366C3.71404 2.30324 5.00598 3.57772 5.8012 4.40891C5.97709 4.59275 5.97421 4.88334 5.7947 5.06367C5.04367 5.81809 4.02697 6.84005 3.04144 7.84112L0.13809 10.8339C-0.0461189 10.6497 -0.0454072 10.3529 0.13809 10.1693L0.13809 0.1365Z"
        fill={color}
      />
    </g>
    <g transform="translate(9.531, 4.531)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.46875 0C0.727633 0 0.9375 0.209867 0.9375 0.46875V10.4688C0.9375 10.7276 0.727633 10.9375 0.46875 10.9375C0.209867 10.9375 0 10.7276 0 10.4688V0.46875C0 0.209867 0.209867 0 0.46875 0Z"
        fill={color}
      />
    </g>
  </svg>
);

export const CollapseButton: React.FC<CollapseButtonProps> = ({
  variant = "Collapse",
  label = "Collapse",
  className = "",
  onClick,
}) => {
  const isCollapse = variant.startsWith("Collapse");
  const isExpand = variant.startsWith("Expand");
  const isFocus = variant.endsWith("Focus");
  const isSecondary = variant === "CollapseSecondary";
  const isIconOnly = isExpand;

  const textColor = isSecondary ? "#b7b8b9" : "#86888a";
  const arrowColor = isSecondary ? "#b7b8b9" : "#6E7173";

  const content = (
    <>
      {isCollapse && <CollapseArrow color={arrowColor} />}
      {isExpand && <ExpandArrow color={arrowColor} />}
      {!isIconOnly && (
        <span className="collapse-button__label" style={{ color: textColor }}>
          {label}
        </span>
      )}
    </>
  );

  return (
    <div
      className={[
        "collapse-button",
        `collapse-button--variant-${variant.toLowerCase()}`,
        className,
      ].join(" ")}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={isCollapse ? label : "Expand"}
    >
      {isFocus ? (
        <div className="collapse-button__focus-wrapper">{content}</div>
      ) : (
        content
      )}
    </div>
  );
};

export default CollapseButton;
