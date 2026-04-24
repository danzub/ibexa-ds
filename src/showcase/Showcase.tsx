import React from "react";
import "./Showcase.css";
import { MainMenuItemBase } from "../components/MainMenuItemBase";
import {
  DashboardIcon, ContentIcon, UsersIcon, ReportsIcon, SettingsIcon,
  StoreIcon, MailIcon, SearchIcon, ChartIcon, TrashIcon,
  StarIcon, PinnedIcon, CampaignsIcon, BellIcon, BrainIcon,
  BoltIcon, PuzzleIcon, ShieldIcon, FileTextIcon, GlobeIcon,
  PhoneIcon, FolderIcon, CartIcon, PersonIcon, GiftIcon,
  DataIcon, EyeIcon,
} from "./icons";

const ibexaItems = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Agents", icon: <BrainIcon /> },
  { label: "Knowledge base", icon: <FileTextIcon /> },
  { label: "Reports", icon: <ChartIcon /> },
  { label: "Budget", icon: <ReportsIcon /> },
  { label: "Organizations", icon: <UsersIcon /> },
  { label: "Activity log", icon: <BellIcon /> },
  { label: "MCP serves", icon: <PuzzleIcon /> },
  { label: "AI models", icon: <BrainIcon /> },
];

const cohesivoItems = [
  { label: "Content", icon: <ContentIcon /> },
  { label: "Site management", icon: <GlobeIcon /> },
  { label: "Product management", icon: <StoreIcon /> },
  { label: "Commerce", icon: <CartIcon /> },
  { label: "Customers", icon: <UsersIcon /> },
  { label: "Engage", icon: <MailIcon /> },
  { label: "Favourites", icon: <StarIcon /> },
  { label: "Trash", icon: <TrashIcon /> },
];

const actitoItems = [
  { label: "Hub", icon: <DashboardIcon /> },
  { label: "Profiles", icon: <PersonIcon /> },
  { label: "E-mail campaigns", icon: <MailIcon /> },
  { label: "SMS campaigns", icon: <PhoneIcon /> },
  { label: "Push campaigns", icon: <BellIcon /> },
  { label: "Whatsapp campaigns", icon: <PhoneIcon /> },
  { label: "Audience", icon: <UsersIcon /> },
  { label: "Forms and pages", icon: <FileTextIcon /> },
  { label: "Automation", icon: <BoltIcon /> },
  { label: "Product management", icon: <StoreIcon /> },
  { label: "Addons", icon: <PuzzleIcon /> },
  { label: "Integrations", icon: <PuzzleIcon /> },
];

const quableItems = [
  { label: "Advanced search", icon: <SearchIcon /> },
  { label: "Products", icon: <StoreIcon /> },
  { label: "Assets", icon: <FolderIcon /> },
  { label: "Channels", icon: <GlobeIcon /> },
  { label: "Imports / Exports", icon: <DataIcon /> },
  { label: "Activity reports", icon: <ChartIcon /> },
  { label: "Administration", icon: <SettingsIcon /> },
  { label: "Quable app store", icon: <StoreIcon /> },
  { label: "Ibexa Connector", icon: <PuzzleIcon /> },
];

const qualifioItems = [
  { label: "Campaign list", icon: <CampaignsIcon />, module: "Campaigns" },
  { label: "Content", icon: <ContentIcon />, module: "Campaigns" },
  { label: "Publishing", icon: <FileTextIcon />, module: "Campaigns" },
  { label: "Advanced features", icon: <BoltIcon />, module: "Campaigns" },
  { label: "Reward program list", icon: <GiftIcon />, module: "Reward programs" },
  { label: "Publishing", icon: <FileTextIcon />, module: "Reward programs" },
  { label: "Testings", icon: <EyeIcon />, module: "Reward programs" },
  { label: "Cross account dashboard", icon: <ChartIcon />, module: "Insights" },
  { label: "Account dashboard", icon: <ChartIcon />, module: "Insights" },
  { label: "Opt-ins stats", icon: <ChartIcon />, module: "Insights" },
  { label: "Files", icon: <FolderIcon />, module: "Design" },
  { label: "Templates", icon: <FileTextIcon />, module: "Design" },
  { label: "Fonts", icon: <FileTextIcon />, module: "Design" },
  { label: "Push rules", icon: <BellIcon />, module: "Integrations" },
  { label: "Variables", icon: <BoltIcon />, module: "Integrations" },
  { label: "Connectors", icon: <PuzzleIcon />, module: "Integrations" },
  { label: "Login pages", icon: <FileTextIcon />, module: "Integrations" },
  { label: "Thematics", icon: <FolderIcon />, module: "Integrations" },
  { label: "Export", icon: <DataIcon />, module: "Integrations" },
  { label: "Monitoring", icon: <EyeIcon />, module: "Integrations" },
  { label: "Personal data", icon: <PersonIcon />, module: "Privacy" },
  { label: "Privacy texts", icon: <FileTextIcon />, module: "Privacy" },
  { label: "Export and erasure requests", icon: <DataIcon />, module: "Privacy" },
  { label: "Logs", icon: <FileTextIcon />, module: "Privacy" },
  { label: "Overview", icon: <DashboardIcon />, module: "Privacy" },
  { label: "GDPR Settings", icon: <SettingsIcon />, module: "Privacy" },
  { label: "GDPR Documentation", icon: <FileTextIcon />, module: "Privacy" },
  { label: "Organisations", icon: <UsersIcon />, module: "Super Admin" },
  { label: "Campaigns", icon: <CampaignsIcon />, module: "Super Admin" },
  { label: "Reward program list", icon: <GiftIcon />, module: "Super Admin" },
];

const raptorItems = [
  { label: "Analytics and insights", icon: <ChartIcon /> },
  { label: "Data management", icon: <DataIcon /> },
  { label: "Customer Data Platform", icon: <UsersIcon /> },
  { label: "Recommendations", icon: <StarIcon /> },
  { label: "E-mail triggers", icon: <MailIcon /> },
  { label: "Site search", icon: <SearchIcon /> },
  { label: "Merchandising", icon: <StoreIcon /> },
  { label: "AI Models", icon: <BrainIcon /> },
];

const genericItems = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Pinned", icon: <PinnedIcon /> },
  { label: "Administration", icon: <SettingsIcon /> },
];

interface MenuGroup {
  title: string;
  items: { label: string; icon: React.ReactNode; module?: string }[];
}

const groups: MenuGroup[] = [
  { title: "Generic", items: genericItems },
  { title: "Ibexa", items: ibexaItems },
  { title: "Cohesivo", items: cohesivoItems },
  { title: "Actito", items: actitoItems },
  { title: "Quable", items: quableItems },
  { title: "Qualifio", items: qualifioItems },
  { title: "Raptor", items: raptorItems },
];

type ItemState = "Enabled" | "Hover" | "Selected";
type ItemSize = "Extended" | "Collapsed";

function stateLabel(state: ItemState): string {
  switch (state) {
    case "Enabled": return "Enabled";
    case "Hover": return "Hover";
    case "Selected": return "Selected";
    default: return state;
  }
}

const Showcase: React.FC = () => {
  return (
    <div className="showcase">
      <h1 className="showcase__title">Main Menu Items</h1>
      <p className="showcase__subtitle">
        Implementation of Figma node <strong>341:52130</strong> from the i1 Design System
      </p>

      {groups.map((group) => (
        <section key={group.title} className="showcase__group">
          <h2 className="showcase__group-title">{group.title}</h2>

          {/* Extended variants */}
          <div className="showcase__section">
            <h3 className="showcase__section-title">Extended</h3>
            <div className="showcase__grid">
              {( ["Enabled", "Hover", "Selected"] as ItemState[] ).map((state) => (
                <div key={state} className="showcase__column">
                  <span className="showcase__state-label">{stateLabel(state)}</span>
                  <div className="showcase__items">
                    {group.items.map((item, idx) => (
                      <MainMenuItemBase
                        key={`${state}-ext-${idx}`}
                        label={item.label}
                        icon={item.icon}
                        size="Extended"
                        state={state}
                        showChevron={state === "Selected" || state === "Enabled"}
                        tooltipLabel={item.label}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsed variants */}
          <div className="showcase__section">
            <h3 className="showcase__section-title">Collapsed</h3>
            <div className="showcase__grid">
              {( ["Enabled", "Hover", "Selected"] as ItemState[] ).map((state) => (
                <div key={state} className="showcase__column">
                  <span className="showcase__state-label">{stateLabel(state)}</span>
                  <div className="showcase__items">
                    {group.items.map((item, idx) => (
                      <MainMenuItemBase
                        key={`${state}-col-${idx}`}
                        label={item.label}
                        icon={item.icon}
                        size="Collapsed"
                        state={state}
                        showText={false}
                        showChevron={false}
                        tooltipLabel={item.label}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Showcase;
