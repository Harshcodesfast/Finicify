import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const SectorRiskAnalysis: React.FC = () => {
  const data = {
    sectors: [
      { label: "Very High", value: 49.3 },
      { label: "High", value: 12.53 },
      { label: "Medium", value: 14 },
      { label: "Low", value: 8 },
      { label: "Very Low", value: 3 },
    ],
    topFunds: [
      {
        name: "Atlas Portföy Yönetimi Fonu",
        company: "Deniz Portföy Yönetimi A.Ş.",
        category: "Bond Funds",
        "1YReturn": 10.53,
        "3YReturn": 23.35,
        risk: "Low",
      },
      {
        name: "Yapı Kredi Portföy Yönetimi Fonu",
        company: "Yapı Kredi Portföy",
        category: "Equity Funds",
        "1YReturn": 12.66,
        "3YReturn": 25.22,
        risk: "High",
      },
    ],
  };

  const COLORS = ["#ff5959", "#ffb347", "#ffd166", "#06d6a0", "#118ab2"];
  const [hovered, setHovered] = useState<number | null>(null);

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const sortedFunds = React.useMemo(() => {
    if (!sortConfig) return data.topFunds;
    const sorted = [...data.topFunds].sort((a, b) => {
      const aVal = a[sortConfig.key as keyof typeof a];
      const bVal = b[sortConfig.key as keyof typeof b];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return String(aVal).localeCompare(String(bVal));
    });
    return sorted;
  }, [sortConfig]);

  const requestSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev?.key === key && prev.direction === "asc") {
        return { key, direction: "desc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-2xl text-white mt-8 space-y-8">
      {/* === TITLE === */}
      <h2 className="text-lg font-semibold mb-4">Sector Risk Analysis</h2>

      {/* === CHART + STATS === */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-[300px] md:h-[350px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data.sectors}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={2}
                onMouseEnter={(_, i) => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animationBegin={0}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {data.sectors.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#0b0f19"
                    strokeWidth={hovered === index ? 3 : 1}
                    style={{
                      filter:
                        hovered === index
                          ? "drop-shadow(0 0 10px rgba(255,255,255,0.5))"
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "rgba(20,20,30,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-gray-300 text-xs">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* === LEGEND / METRICS === */}
        <div className="flex flex-wrap justify-center gap-3">
          {data.sectors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center bg-[#111827] border border-white/10 rounded-lg px-4 py-3 w-[100px]"
            >
              <div
                className="w-4 h-4 rounded-full mb-1"
                style={{ backgroundColor: COLORS[i] }}
              ></div>
              <p className="text-xs text-gray-400">{s.label}</p>
              <p className="font-semibold text-sm">{s.value}%</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === TABLE === */}
      <div className="mt-8">
        <h3 className="text-md font-medium mb-3">
          Top Performing Funds in Sector
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-white/10">
                {[
                  { key: "name", label: "Fund" },
                  { key: "company", label: "Company" },
                  { key: "category", label: "Category" },
                  { key: "1YReturn", label: "1Y Return (%)" },
                  { key: "3YReturn", label: "3Y Return (%)" },
                  { key: "risk", label: "Risk Level" },
                ].map((col) => (
                  <th
                    key={col.key}
                    onClick={() => requestSort(col.key)}
                    className="text-left py-3 px-4 cursor-pointer select-none hover:text-white transition"
                  >
                    {col.label}
                    {sortConfig?.key === col.key && (
                      <span className="ml-1 text-xs text-gray-500">
                        {sortConfig.direction === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedFunds.map((fund, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-2 px-4 text-gray-200">{fund.name}</td>
                  <td className="py-2 px-4 text-gray-300">{fund.company}</td>
                  <td className="py-2 px-4 text-gray-400">{fund.category}</td>
                  <td className="py-2 px-4 text-gray-200">
                    {fund["1YReturn"]}
                  </td>
                  <td className="py-2 px-4 text-gray-200">
                    {fund["3YReturn"]}
                  </td>
                  <td className="py-2 px-4 text-gray-300">{fund.risk}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SectorRiskAnalysis;
