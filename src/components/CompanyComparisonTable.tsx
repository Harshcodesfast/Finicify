import React from "react";

const CompanyComparisonTable: React.FC = () => {
  const data = [
    {
      founder: "Yapı Kredi Portföy Yönetimi A.Ş.",
      fundCount: 12,
      totalSize: "34.53",
      avgReturn: "23.53",
      avgFee: "23.24",
      avgVolatility: "23.14",
    },
    // repeat data for visual fullness
    ...Array(7).fill({
      founder: "Yapı Kredi Portföy Yönetimi A.Ş.",
      fundCount: 12,
      totalSize: "34.53",
      avgReturn: "23.53",
      avgFee: "23.24",
      avgVolatility: "23.14",
    }),
  ];

  return (
    <div className="relative bg-[#0b0f19] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-2xl mt-8">
      {/* === Blue Glow === */}
      <div
        className="absolute top-[-150px] left-[30%] w-[700px] h-[500px] 
        bg-[radial-gradient(ellipse_at_center,rgba(15,120,238,0.8)_0%,rgba(15,120,238,0.35)_40%,rgba(0,0,0,0)_80%)]
        blur-[140px] opacity-90 -z-10"
      ></div>

      {/* === Subtle Overlay === */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0b0f19]/95 via-[#0e1621]/80 to-[#101a26]/90 pointer-events-none -z-10"></div>

      {/* === Header === */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Company-Based Comparison
        </h2>
      </div>

      {/* === Table === */}
      <div className="overflow-x-auto relative z-10">
        <table className="w-full border-collapse text-sm text-gray-300">
          <thead>
            <tr className="text-gray-400 border-b border-white/10 text-left">
              <th className="pb-3 font-medium">Founder</th>
              <th className="pb-3 font-medium"># of Funds</th>
              <th className="pb-3 font-medium">Total Size (TL)</th>
              <th className="pb-3 font-medium">Avg 1Y Return (%)</th>
              <th className="pb-3 font-medium">Avg Fee (%)</th>
              <th className="pb-3 font-medium">Avg Volatility (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-3">{item.founder}</td>
                <td className="py-3">{item.fundCount}</td>
                <td className="py-3">{item.totalSize}</td>
                <td className="py-3">{item.avgReturn}</td>
                <td className="py-3">{item.avgFee}</td>
                <td className="py-3">{item.avgVolatility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyComparisonTable;
