import React, { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import profile from "../assets/linkin headshot.jpg";
import "remixicon/fonts/remixicon.css";

const Navbar: React.FC = () => {
  const { collapsed } = useSidebar();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 ${
        collapsed ? "left-20" : "left-64"
      } right-0 h-16 flex items-center justify-between px-6 py-10 border-b border-white/10 
      bg-white/5 backdrop-blur-xl z-30 transition-all duration-300`}
    >
      {/* Left Spacer (keeps layout aligned when sidebar toggles) */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl text-gray-300 font-medium">Dashboard</h1>
      </div>

      {/* === Right Section === */}
      <div className="flex items-center gap-5 ">
        {/* Expandable Search Bar */}
        <div
          className={`flex items-center transition-all duration-300 border border-white/10 rounded-lg overflow-hidden bg-white/5 ${
            searchOpen ? "w-64 px-3 py-1.5" : "w-10 justify-center"
          }`}
        >
          <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="text-gray-400 hover:text-white transition"
          >
            <i className="ri-search-line text-3xl"></i>
          </button>

          {searchOpen && (
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              onBlur={() => setSearchOpen(false)} // auto-close on blur
              className="bg-transparent text-lg text-gray-300 ml-2 outline-none w-full placeholder-gray-500"
            />
          )}
        </div>
        {/* Info Icon */}
        <button className="text-gray-400 hover:text-white transition">
          <i className="ri-information-line text-3xl"></i>
        </button>

        {/* Notification Bell */}
        <button className="relative text-gray-400 hover:text-white transition">
          <i className="ri-notification-3-line text-3xl"></i>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={profile}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-md font-medium text-white">John Doe</span>
            <span className="text-sm text-gray-400">Gelir Ekkibim Kurumu</span>
          </div>
          <i className="ri-arrow-down-s-line text-gray-400 text-lg"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
