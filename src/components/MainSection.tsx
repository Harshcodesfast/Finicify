import React from "react";
import { useSidebar } from "../context/SidebarContext";
import CompanyComparisonTable from "./CompanyComparisonTable";
import PerformanceChart from "./PerformanceChart";

const MainSection: React.FC = () => {
  const { collapsed } = useSidebar();
  const sidebarWidth = collapsed ? "5rem" : "16rem"; // Tailwind w-20 / w-64

  return (
    <main
      className="transition-all duration-300 pt-24 pb-12 px-6 sm:px-8 md:px-10 overflow-x-hidden absolute top-0 right-0"
      style={{
        marginLeft: sidebarWidth,
        width: `calc(100% - ${sidebarWidth})`,
      }}
    >
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-8">
        Company Internal Comparison
      </h1>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="px-5 py-2.5 rounded-lg bg-[#0b0f19] text-sm text-gray-300 hover:bg-white/20 transition border border-white/10">
          Compare with Sector
        </button>
        <button className="px-5 py-2.5 rounded-lg bg-linear-to-r from-sky-500 to-cyan-400 text-sm text-white font-medium shadow-lg">
          Compare Within Company’s Own Funds
        </button>
      </div>

      {/* Description */}
      <div className="bg-[#0b0f19] border border-white/9 rounded-2xl p-4 md:p-5 mb-6 w-min-full">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Company Selection: Analyze the funds of a specific Portfolio
          management company in detail.
        </p>
      </div>

      {/* Company Dropdown Section */}
      <div className="bg-[#0b0f19] rounded-2xl p-5 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#295778]/10 via-transparent to-transparent pointer-events-none"></div>
        <h2 className="text-lg font-semibold mb-4 text-white relative z-10">
          Company to Be Analyzed
        </h2>

        <div className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between text-sm text-gray-300 relative z-10">
          <div>
            <p className="text-xs text-gray-400 mb-1">
              Portfolio Management Company
            </p>
            <p className="font-medium text-white">
              INVEO Portfolio Management Inc.
            </p>
          </div>
          <i className="ri-arrow-down-s-line text-gray-400 text-lg"></i>
        </div>
      </div>

      {/* Company Analysis Cards */}
      <div className="bg-[#0b0f19]  border border-white/10 rounded-2xl p-5 md:p-6 relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute top-[-100px] right-[10%] w-[1100px] h-[850px] rounded-full bg-[radial-gradient(ellipse_at_60%_20%,rgba(41,87,120,0.85)_0%,rgba(41,87,120,0.55)_35%,rgba(0,0,0,0)_75%)] blur-[160px] opacity-95"></div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5 relative z-10">
          <h2 className="text-lg font-semibold text-white">Company Analysis</h2>
          <button className="text-sm text-gray-400 hover:text-white transition mt-2 md:mt-0">
            Compare with Sector
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {/* Card */}
          {[
            { label: "Total Number of Funds", value: "75" },
            { label: "Total Assets Under Management (AUM)", value: "75.7B TL" },
            { label: "Average Management Fee", value: "2.03%" },
            { label: "Average 1-Year Return", value: "23.61%" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/10 hover:bg-white/15 p-5 border border-white/10 transition"
            >
              <p className="text-sm text-gray-400 mb-2">{item.label}</p>
              <h3 className="text-3xl font-semibold text-white">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <CompanyComparisonTable />
      <PerformanceChart />
    </main>
  );
};

export default MainSection;
