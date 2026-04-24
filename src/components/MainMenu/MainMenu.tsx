import React from "react";
import "./MainMenu.css";
import { CollapseButton } from "../CollapseButton";
import { Divider } from "../Divider";
import { MainMenuItemBase } from "../MainMenuItemBase";
import {
  DashboardIcon,
  UsersIcon,
  BrainIcon,
  PuzzleIcon,
  ReportsIcon,
  FileTextIcon,
  ChartIcon,
  BellIcon,
} from "../../showcase/icons";

export interface MainMenuProps {
  /** Extra CSS class */
  className?: string;
  /** Click handler for collapse button */
  onCollapseClick?: () => void;
}

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Organizations", icon: <UsersIcon /> },
  { label: "AI models", icon: <BrainIcon /> },
  { label: "MCP servers", icon: <PuzzleIcon /> },
  { label: "Agents", icon: <BrainIcon /> },
  { label: "Budget", icon: <ReportsIcon /> },
  { label: "Knowledge base", icon: <FileTextIcon /> },
  { label: "Reports", icon: <ChartIcon /> },
  { label: "Activity log", icon: <BellIcon /> },
];

export const MainMenu: React.FC<MainMenuProps> = ({
  className = "",
  onCollapseClick,
}) => {
  return (
    <nav
      className={["main-menu", className].join(" ")}
      role="navigation"
      aria-label="Main menu"
    >
      <div className="main-menu__container">
        <CollapseButton
          variant="Collapse"
          label="Collapse"
          onClick={onCollapseClick}
        />
        <div className="main-menu__divider-wrapper">
          <Divider type="Line" location="Main menu" />
        </div>
        <ul className="main-menu__items">
          {menuItems.map((item) => (
            <li key={item.label} className="main-menu__item">
              <MainMenuItemBase
                label={item.label}
                icon={item.icon}
                size="Extended"
                state="Enabled"
                showChevron
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
