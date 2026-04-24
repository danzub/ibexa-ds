import React from "react";
import "./MainMenuSubitem.css";
import { PinButton } from "./PinButton";
import { DragIcon } from "./DragIcon";

export type SubitemType = "Main menu" | "Context menu";
export type SubitemLocation = "All" | "False" | "Pinned";
export type SubitemState =
  | "Enable"
  | "Hover"
  | "Hover pinned"
  | "Hover unpinned"
  | "Selected"
  | "Focus unpinned text"
  | "Focus unpinned pin"
  | "Focus pinned text"
  | "Focus pinned pin";

export interface MainMenuSubitemProps {
  label?: string;
  type?: SubitemType;
  location?: SubitemLocation;
  state?: SubitemState;
  className?: string;
  onClick?: () => void;
  onPinClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function getTextColor(
  state: SubitemState,
  type: SubitemType
): string {
  if (state === "Selected") return "#dc5685";
  if (state === "Hover" || state === "Hover pinned" || state === "Hover unpinned") return "#e07198";
  if (state.startsWith("Focus")) return "#ffffff";
  return "#ffffff";
}

function getPinType(state: SubitemState): "Unpinned" | "Pinned" | null {
  if (
    state === "Focus pinned pin" ||
    state === "Focus pinned text" ||
    state === "Hover pinned"
  ) {
    return "Pinned";
  }
  if (
    state === "Focus unpinned pin" ||
    state === "Focus unpinned text" ||
    state === "Hover unpinned" ||
    state === "Hover" ||
    state === "Selected"
  ) {
    return "Unpinned";
  }
  return null;
}

function isPinVisible(state: SubitemState, location: SubitemLocation): boolean {
  if (location === "False") return false;
  if (state === "Enable") return false;
  return true;
}

function isPinFocused(state: SubitemState): boolean {
  return state === "Focus unpinned pin" || state === "Focus pinned pin";
}

function isTextFocused(state: SubitemState): boolean {
  return state === "Focus unpinned text" || state === "Focus pinned text";
}

function showDragHandle(state: SubitemState, location: SubitemLocation, type: SubitemType): boolean {
  if (type !== "Main menu") return false;
  if (state === "Hover pinned" && location === "Pinned") return true;
  if (state === "Selected" && location === "False") return true;
  return false;
}

function showIcon(state: SubitemState, type: SubitemType): boolean {
  if (type !== "Main menu") return false;
  if (state === "Focus unpinned text" || state === "Focus pinned text") return false;
  return true;
}

export const MainMenuSubitem: React.FC<MainMenuSubitemProps> = ({
  label = "Label",
  type = "Main menu",
  location = "All",
  state = "Enable",
  className = "",
  onClick,
  onPinClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const textColor = getTextColor(state, type);
  const pinType = getPinType(state);
  const pinVisible = isPinVisible(state, location);
  const pinFocused = isPinFocused(state);
  const textFocused = isTextFocused(state);
  const dragVisible = showDragHandle(state, location, type);
  const iconVisible = showIcon(state, type);

  const labelContent = (
    <span
      className="main-menu-subitem__label"
      style={{ color: textColor }}
    >
      {label}
    </span>
  );

  return (
    <div
      role="menuitem"
      aria-selected={state === "Selected"}
      className={[
        "main-menu-subitem",
        `main-menu-subitem--type-${type.toLowerCase().replace(" ", "-")}`,
        `main-menu-subitem--location-${location.toLowerCase()}`,
        `main-menu-subitem--state-${state.toLowerCase().replace(" ", "-")}`,
        className,
      ].join(" ")}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
    >
      <div className="main-menu-subitem__content">
        {dragVisible && (
          <div className="main-menu-subitem__drag">
            <DragIcon color={state === "Selected" ? "#dc5685" : "#e07198"} />
          </div>
        )}

        {iconVisible && (
          <div className="main-menu-subitem__icon" aria-hidden="true" />
        )}

        {textFocused ? (
          <div className="main-menu-subitem__text-focus">
            {labelContent}
            {pinType === "Pinned" && (
              <button
                type="button"
                className="main-menu-subitem__inline-pin"
                onClick={(e) => { e.stopPropagation(); onPinClick?.(); }}
                aria-label="Unpin item"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.375 0.708L4.708 3.375 2.042 4.375 1.042 5.375 5.708 10.042 6.708 9.042 7.708 6.375 10.375 3.708" fill="#DC5685"/>
                  <path d="M7.11 0.443c.146-.146.384-.146.53 0 .147.147.147.384 0 .53L4.973 3.64a.375.375 0 0 1-.133.086l-2.59.971-.678.678 4.137 4.136.677-.677.972-2.59.016-.037a.376.376 0 0 1 .07-.097L10.11 3.443c.146-.146.384-.147.53 0 .147.147.147.384 0 .53L8.03 6.583l-.971 2.59a.375.375 0 0 1-.086.134l-1 1a.375.375 0 0 1-.53 0L.776 5.64a.375.375 0 0 1 0-.53l1-1 .03-.027a.375.375 0 0 1 .104-.059l2.59-.972 2.61-2.609Z" fill="#DC5685"/>
                </svg>
              </button>
            )}
          </div>
        ) : (
          labelContent
        )}
      </div>

      {pinVisible && pinType && (
        <PinButton
          type={pinType}
          state={pinFocused ? "Focus" : "Enable"}
          onClick={(e) => { e?.stopPropagation?.(); onPinClick?.(); }}
        />
      )}
    </div>
  );
};

export default MainMenuSubitem;
