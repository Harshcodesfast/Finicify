import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const PerformanceChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState("6 ay");

  const tabs = ["1 hafta", "1 ay", "6 ay", "2025", "1 Yıl", "5 Yıl"];

  const data = [
    { name: "Teknoloji Fonu", value: 12.5 },
    { name: "Global Hisse Senedi", value: 9.64 },
    { name: "Yapay Zeka Fonu", value: 4.64 },
    { name: "Portföy Fonu", value: 1.64 },
    { name: "Sürdürülebilirlik Fonu", value: 14.64 },
  ];

  return (
    <div className="relative bg-[#0b0f19] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-2xl mt-8">
      {/* === Blue Glow === */}
      <div
        className="absolute top-[-150px] left-[40%] w-[700px] h-[500px] 
        bg-[radial-gradient(ellipse_at_center,rgba(15,120,238,0.8)_0%,rgba(15,120,238,0.35)_40%,rgba(0,0,0,0)_80%)]
        blur-[140px] opacity-90 -z-10"
      ></div>

      {/* === Subtle Overlay === */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0b0f19]/95 via-[#0e1621]/80 to-[#101a26]/90 pointer-events-none -z-10"></div>

      {/* === Header === */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 relative z-10">
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Company Internal Performance Chart - Top 5 Funds
        </h2>
      </div>

      {/* === Tabs === */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-sm rounded-md transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#0f78ee] text-white font-medium shadow-[0_0_10px_rgba(15,120,238,0.6)]"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Chart === */}
      <div className="relative z-10 w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
          >
            <XAxis type="number" domain={[0, 16]} tick={{ fill: "#aaa" }} />
            <YAxis
              type="category"
              dataKey="name"
              width={160}
              tick={{ fill: "#ccc", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(15,15,25,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Bar
              dataKey="value"
              radius={[0, 6, 6, 0]}
              barSize={24}
              animationDuration={600}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#0f78ee"
                  stroke="rgba(255,255,255,0.1)"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
