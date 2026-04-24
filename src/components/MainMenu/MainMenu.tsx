import React, { useState, useCallback, useEffect, useRef } from "react";
import "./MainMenu.css";
import { CollapseButton } from "../CollapseButton";
import { Divider } from "../Divider";
import { MainMenuItemBase } from "../MainMenuItemBase";
import { MainMenuSubitem } from "../MainMenuSubitem";
import { MainMenuContextMenu, ContextMenuItem } from "../MainMenuContextMenu";
import {
  DashboardIcon, UsersIcon, BrainIcon, PuzzleIcon, ReportsIcon,
  FileTextIcon, ChartIcon, BellIcon, CampaignsIcon,
} from "../../showcase/icons";

interface SubitemData {
  label: string;
  description?: string;
}

interface MenuItemData {
  label: string;
  icon: React.ReactNode;
  subitems?: SubitemData[];
}

const menuItems: MenuItemData[] = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Organizations", icon: <UsersIcon /> },
  { label: "AI models", icon: <BrainIcon /> },
  { label: "MCP servers", icon: <PuzzleIcon /> },
  { label: "Agents", icon: <BrainIcon /> },
  {
    label: "Campaigns",
    icon: <CampaignsIcon />,
    subitems: [
      { label: "Campaign list" },
      { label: "Content", description: "Create & manage campaigns" },
      { label: "Publishing" },
      { label: "Insights", description: "Analyze performances & results" },
    ],
  },
  { label: "Budget", icon: <ReportsIcon /> },
  { label: "Knowledge base", icon: <FileTextIcon /> },
  { label: "Reports", icon: <ChartIcon /> },
  { label: "Activity log", icon: <BellIcon /> },
];

const mainMenuContextItems: ContextMenuItem[] = [
  { id: "pin", label: "Pin to sidebar" },
  { id: "open-new", label: "Open in new tab" },
];

const moduleContextItems: ContextMenuItem[] = [
  { id: "overview", label: "Go to overview" },
  { id: "pin", label: "Pin to sidebar" },
  { id: "open-new", label: "Open in new tab" },
];

export const MainMenu: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [pinnedItems, setPinnedItems] = useState<Set<string>>(new Set());
  const [hoveredSubitem, setHoveredSubitem] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    itemLabel: string;
    hasSubitems: boolean;
  } | null>(null);

  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!contextMenu) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContextMenu(null);
    };
    const handleClick = () => setContextMenu(null);
    const handleScroll = () => setContextMenu(null);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClick);
    menuRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClick);
      menuRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [contextMenu]);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
    setContextMenu(null);
    setExpandedItems(new Set());
  }, []);

  const toggleExpand = useCallback((label: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  const handleItemClick = useCallback((item: MenuItemData) => {
    setSelectedItem(item.label);
    setContextMenu(null);
    if (item.subitems) {
      toggleExpand(item.label);
    }
  }, [toggleExpand]);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent, item: MenuItemData) => {
      e.preventDefault();
      e.stopPropagation();
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        itemLabel: item.label,
        hasSubitems: !!item.subitems,
      });
    },
    []
  );

  const togglePin = useCallback((label: string) => {
    setPinnedItems((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  const getItemState = useCallback(
    (label: string): "Enabled" | "Hover" | "Selected" | "Opened" => {
      if (selectedItem === label) return "Selected";
      if (hoveredItem === label) return "Hover";
      if (expandedItems.has(label)) return "Opened";
      return "Enabled";
    },
    [selectedItem, hoveredItem, expandedItems]
  );

  const getSubitemState = useCallback(
    (label: string): "Enable" | "Hover" | "Hover pinned" => {
      if (hoveredSubitem === label) {
        return pinnedItems.has(label) ? "Hover pinned" : "Hover";
      }
      return pinnedItems.has(label) ? "Hover pinned" : "Enable";
    },
    [hoveredSubitem, pinnedItems]
  );

  const pinnedSubitemsData = React.useMemo(() => {
    const result: { parentLabel: string; subitem: SubitemData }[] = [];
    for (const item of menuItems) {
      if (!item.subitems) continue;
      for (const sub of item.subitems) {
        if (pinnedItems.has(sub.label)) {
          result.push({ parentLabel: item.label, subitem: sub });
        }
      }
    }
    return result;
  }, [pinnedItems]);

  return (
    <nav
      ref={menuRef}
      className={[
        "main-menu",
        isCollapsed ? "main-menu--collapsed" : "main-menu--extended",
      ].join(" ")}
      role="navigation"
      aria-label="Main menu"
    >
      <div className="main-menu__container">
        {/* Pinned Section */}
        {pinnedSubitemsData.length > 0 && !isCollapsed && (
          <>
            <Divider type="First" label="Pinned" location="Main menu" />
            <ul className="main-menu__pinned-list">
              {pinnedSubitemsData.map(({ subitem }) => (
                <li key={subitem.label}>
                  <MainMenuSubitem
                    label={subitem.label}
                    type="Main menu"
                    state={getSubitemState(subitem.label)}
                    onClick={() => setSelectedItem(subitem.label)}
                    onPinClick={() => togglePin(subitem.label)}
                    onMouseEnter={() => setHoveredSubitem(subitem.label)}
                    onMouseLeave={() => setHoveredSubitem(null)}
                  />
                </li>
              ))}
            </ul>
            <Divider type="Line" location="Main menu" />
          </>
        )}

        {/* Collapse / Expand Button */}
        <CollapseButton
          variant={isCollapsed ? "Expand" : "Collapse"}
          label={isCollapsed ? "Expand" : "Collapse"}
          onClick={toggleCollapse}
        />

        {/* Divider */}
        <div className="main-menu__divider-wrapper">
          <Divider type="Line" location="Main menu" />
        </div>

        {/* Menu Items */}
        <ul className="main-menu__items">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="main-menu__item"
              onContextMenu={(e) => handleContextMenu(e, item)}
            >
              <MainMenuItemBase
                label={item.label}
                icon={item.icon}
                size={isCollapsed ? "Collapsed" : "Extended"}
                state={getItemState(item.label)}
                showChevron={!!item.subitems && !isCollapsed}
                isExpanded={expandedItems.has(item.label)}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                tooltipLabel={item.label}
              />
              {/* Subitems (only in Extended mode) */}
              {!isCollapsed && item.subitems && expandedItems.has(item.label) && (
                <ul className="main-menu__subitems">
                  {item.subitems.map((sub) => (
                    <li key={sub.label}>
                      <MainMenuSubitem
                        label={sub.label}
                        type="Main menu"
                        state={getSubitemState(sub.label)}
                        onClick={() => setSelectedItem(sub.label)}
                        onPinClick={() => togglePin(sub.label)}
                        onMouseEnter={() => setHoveredSubitem(sub.label)}
                        onMouseLeave={() => setHoveredSubitem(null)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="main-menu__context-menu-wrapper"
          style={{ left: contextMenu.x, top: contextMenu.y }}
          onClick={(e) => e.stopPropagation()}
        >
          <MainMenuContextMenu
            type={contextMenu.hasSubitems ? "Module" : "Main menu"}
            items={contextMenu.hasSubitems ? moduleContextItems : mainMenuContextItems}
            onItemClick={() => setContextMenu(null)}
          />
        </div>
      )}
    </nav>
  );
};

export default MainMenu;
