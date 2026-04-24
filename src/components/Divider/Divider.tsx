import React from "react";
import "./Divider.css";

export type DividerType = "First" | "Next" | "Line";
export type DividerLocation = "Main menu" | "Context menu";

export interface DividerProps {
  /** Label text (ignored when type="Line") */
  label?: string;
  /** Visual type */
  type?: DividerType;
  /** Menu location variant */
  location?: DividerLocation;
  /** Extra CSS class */
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  label = "Label",
  type = "First",
  location = "Main menu",
  className = "",
}) => {
  const isLine = type === "Line";

  return (
    <div
      className={[
        "divider",
        `divider--type-${type.toLowerCase()}`,
        `divider--location-${location.toLowerCase().replace(" ", "-")}`,
        className,
      ].join(" ")}
      role="separator"
      aria-orientation="horizontal"
    >
      <div className="divider__inner">
        {isLine ? (
          <div className="divider__line" />
        ) : (
          <div className="divider__text">
            <span className="divider__label">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Divider;
