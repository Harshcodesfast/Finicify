import React from "react";
import { useSidebar } from "../context/SidebarContext";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { collapsed, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: "ri-home-5-line",
      label: "Dashboard",
      link: "/",
    },
    {
      icon: "ri-bar-chart-2-line",
      label: "Analytics",
      link: "/analytics",
    },
    { icon: "ri-file-list-3-line", label: "Reports" },
    { icon: "ri-user-3-line", label: "Users" },
    { icon: "ri-settings-3-line", label: "Settings" },
  ];

  return (
    <div
      className={` shrink-0 fixed top-0 left-0 h-full border-r border-white/10 
    ${collapsed ? "w-20" : "w-64"} 
    bg-transparent text-white transition-all duration-300 z-20`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-6 border-b border-white/10">
        {!collapsed && <span className="font-semibold text-lg">Finicify</span>}

        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white transition"
        >
          <i
            className={`ri-${
              collapsed ? "menu-unfold-line" : "menu-fold-line"
            } text-xl`}
          />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col mt-4 gap-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`group flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-all text-sm ${
              collapsed ? "justify-center" : ""
            }`}
            onClick={() => navigate(item.link || "/")}
          >
            <i className={`${item.icon} text-lg group-hover:text-[#60a5fa]`} />
            {!collapsed && (
              <span className="group-hover:text-[#60a5fa] transition">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
