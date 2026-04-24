import React, { useState } from "react";
import "./SidebarNav.css";
import { CollapseButton } from "../CollapseButton";
import { MainMenuItemBase } from "../MainMenuItemBase";
import {
  DashboardIcon,
  UsersIcon,
  BrainIcon,
  ChartIcon,
  FileTextIcon,
  BellIcon,
} from "../../showcase/icons";

/* Custom icons for this navigation */

const AIModelsIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="2" fill={color} />
    <circle cx="10" cy="4" r="1.5" fill={color} />
    <circle cx="10" cy="16" r="1.5" fill={color} />
    <circle cx="4" cy="10" r="1.5" fill={color} />
    <circle cx="16" cy="10" r="1.5" fill={color} />
    <circle cx="5.5" cy="5.5" r="1.2" fill={color} />
    <circle cx="14.5" cy="5.5" r="1.2" fill={color} />
    <circle cx="5.5" cy="14.5" r="1.2" fill={color} />
    <circle cx="14.5" cy="14.5" r="1.2" fill={color} />
    <path d="M10 6V8M10 12V14M6 10H8M12 10H14M6.5 6.5L7.5 7.5M12.5 12.5L13.5 13.5M13.5 6.5L12.5 7.5M7.5 12.5L6.5 13.5" stroke={color} strokeWidth="0.8" />
  </svg>
);

const MCPServerIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="14" height="5" rx="1" stroke={color} strokeWidth="0.938" />
    <rect x="3" y="12" width="14" height="5" rx="1" stroke={color} strokeWidth="0.938" />
    <circle cx="6" cy="5.5" r="1" fill={color} />
    <circle cx="6" cy="14.5" r="1" fill={color} />
    <path d="M10 8V12" stroke={color} strokeWidth="0.938" />
  </svg>
);

const AgentIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="12" height="10" rx="2" stroke={color} strokeWidth="0.938" />
    <circle cx="8" cy="7" r="1.2" fill={color} />
    <circle cx="12" cy="7" r="1.2" fill={color} />
    <path d="M7.5 10C7.5 10 8.5 11 10 11C11.5 11 12.5 10 12.5 10" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
    <path d="M6 13V15C6 16.1046 6.89543 17 8 17H12C13.1046 17 14 16.1046 14 15V13" stroke={color} strokeWidth="0.938" />
  </svg>
);

const BudgetIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="0.938" />
    <path d="M10 5.5V6.5M10 13.5V14.5" stroke={color} strokeWidth="0.938" strokeLinecap="round" />
    <path d="M7.5 8.5C7.5 7.39543 8.39543 6.5 9.5 6.5H10.5C11.6046 6.5 12.5 7.39543 12.5 8.5C12.5 9.5 11.5 9.5 10 10C8.5 10.5 7.5 10.5 7.5 11.5C7.5 12.6046 8.39543 13.5 9.5 13.5H10.5C11.6046 13.5 12.5 12.6046 12.5 11.5" stroke={color} strokeWidth="0.938" strokeLinecap="round" />
  </svg>
);

const KnowledgeBaseIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5C3 3.89543 3.89543 3 5 3H8L10 5H15C16.1046 5 17 5.89543 17 7V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" stroke={color} strokeWidth="0.938" />
    <path d="M7 10H13M7 13H11" stroke={color} strokeWidth="0.938" strokeLinecap="round" />
  </svg>
);

const ReportsIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="2" width="14" height="16" rx="2" stroke={color} strokeWidth="0.938" />
    <path d="M6 6H14M6 9H14M6 12H10" stroke={color} strokeWidth="0.938" strokeLinecap="round" />
    <circle cx="13" cy="13" r="2" stroke={color} strokeWidth="0.8" />
    <path d="M13 12V13L13.5 13.5" stroke={color} strokeWidth="0.6" strokeLinecap="round" />
  </svg>
);

const ActivityLogIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke={color} strokeWidth="0.938" />
    <path d="M3 7H17" stroke={color} strokeWidth="0.938" />
    <circle cx="5.5" cy="5" r="0.75" fill={color} />
    <circle cx="7.5" cy="5" r="0.75" fill={color} />
    <circle cx="9.5" cy="5" r="0.75" fill={color} />
    <path d="M6 10L8 12L14 10" stroke={color} strokeWidth="0.938" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 13H10" stroke={color} strokeWidth="0.938" strokeLinecap="round" />
  </svg>
);

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface SidebarNavProps {
  /** Currently selected item id */
  selectedId?: string;
  /** Callback when an item is selected */
  onSelect?: (id: string) => void;
  /** Additional CSS class */
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { id: "organizations", label: "Organizations", icon: <UsersIcon /> },
  { id: "ai-models", label: "AI models", icon: <AIModelsIcon /> },
  { id: "mcp-servers", label: "MCP servers", icon: <MCPServerIcon /> },
  { id: "agents", label: "Agents", icon: <AgentIcon /> },
  { id: "budget", label: "Budget", icon: <BudgetIcon /> },
  { id: "knowledge-base", label: "Knowledge base", icon: <KnowledgeBaseIcon /> },
  { id: "reports", label: "Reports", icon: <ReportsIcon /> },
  { id: "activity-log", label: "Activity log", icon: <ActivityLogIcon /> },
];

export const SidebarNav: React.FC<SidebarNavProps> = ({
  selectedId = "dashboard",
  onSelect,
  className = "",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSelect = (id: string) => {
    onSelect?.(id);
  };

  const getItemState = (id: string): "Enabled" | "Hover" | "Selected" => {
    if (id === selectedId) return "Selected";
    if (id === hoveredId) return "Hover";
    return "Enabled";
  };

  return (
    <nav
      className={[
        "sidebar-nav",
        isCollapsed ? "sidebar-nav--collapsed" : "sidebar-nav--expanded",
        className,
      ].join(" ")}
      aria-label="Main navigation"
    >
      <div className="sidebar-nav__header">
        <CollapseButton
          variant={isCollapsed ? "Expand" : "Collapse"}
          label="Collapse"
          onClick={handleToggle}
        />
      </div>
      <ul className="sidebar-nav__list" role="menu">
        {defaultNavItems.map((item) => (
          <li key={item.id} className="sidebar-nav__item" role="none">
            <MainMenuItemBase
              icon={item.icon}
              label={item.label}
              tooltipLabel={item.label}
              size={isCollapsed ? "Collapsed" : "Extended"}
              state={getItemState(item.id)}
              showChevron={false}
              showText={!isCollapsed}
              onClick={() => handleSelect(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
