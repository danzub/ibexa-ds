import React, { useState, useEffect } from "react";
import { SidebarNav } from "./components/SidebarNav";
import "./App.css";

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState("dashboard");
  
  useEffect(() => {
    console.log("[v0] App mounted successfully");
  }, []);

  return (
    <div className="app">
      <SidebarNav selectedId={selectedId} onSelect={setSelectedId} />
      <main className="app__content">
        <h1>Sidebar Navigation Demo</h1>
        <p>
          Current selection: <strong>{selectedId}</strong>
        </p>
        <p>Click on menu items to change selection. Use the collapse button to toggle the sidebar.</p>
      </main>
    </div>
  );
};

export default App;
