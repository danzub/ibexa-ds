import React from "react";
import "./MainMenuContextMenu.css";
import { PinButton } from "../MainMenuSubitem/PinButton";

export type ContextMenuType = "Main menu" | "Module";

export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface MainMenuContextMenuProps {
  type?: ContextMenuType;
  items?: ContextMenuItem[];
  className?: string;
  onItemClick?: (id: string) => void;
}

const defaultMainMenuItems: ContextMenuItem[] = [
  { id: "1", label: "Label" },
  { id: "2", label: "Label" },
  { id: "3", label: "Label" },
  { id: "4", label: "Label" },
  { id: "5", label: "Label" },
];

const defaultModuleItems: ContextMenuItem[] = [
  { id: "campaigns", label: "Campaigns", description: "Create & manage campaigns" },
  { id: "rewards", label: "Reward programs", description: "Build & manage loyalty portals" },
  { id: "insights", label: "Insights", description: "Analyze performances & results" },
  { id: "design", label: "Design", description: "Manage Brand Kit & templates" },
  { id: "integrations", label: "Integrations", description: "APIs, webhooks & data flows" },
  { id: "privacy", label: "Privacy", description: "Consent, compliance & user rights" },
  { id: "superadmin", label: "Superadmin", description: "Qualifio employees only" },
];

export const MainMenuContextMenu: React.FC<MainMenuContextMenuProps> = ({
  type = "Main menu",
  items,
  className = "",
  onItemClick,
}) => {
  const isModule = type === "Module";
  const menuItems = items ?? (isModule ? defaultModuleItems : defaultMainMenuItems);

  return (
    <div
      className={[
        "main-menu-context-menu",
        `main-menu-context-menu--type-${isModule ? "module" : "main-menu"}`,
        className,
      ].join(" ")}
      role="menu"
    >
      <div className="main-menu-context-menu__container">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="main-menu-context-menu__item"
            role="menuitem"
            onClick={() => onItemClick?.(item.id)}
            tabIndex={0}
          >
            {isModule ? (
              <>
                <div className="main-menu-context-menu__item-header">
                  {item.icon && (
                    <div className="main-menu-context-menu__item-icon">
                      {item.icon}
                    </div>
                  )}
                  <span className="main-menu-context-menu__item-label">
                    {item.label}
                  </span>
                </div>
                {item.description && (
                  <span className="main-menu-context-menu__item-description">
                    {item.description}
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="main-menu-context-menu__item-label">
                  {item.label}
                </span>
                <PinButton
                  type="Unpinned"
                  state="Enable"
                  className="main-menu-context-menu__pin"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenuContextMenu;
