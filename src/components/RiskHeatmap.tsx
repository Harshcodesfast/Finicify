import React, { useEffect, useMemo, useRef, useState } from "react";
import { scaleSequential, interpolateBlues } from "d3";

const RiskHeatmap: React.FC = () => {
  const data = {
    metrics: [
      {
        fund: "Atlas Portföy Yönetimi Fonu",
        values: [6.65, 6.42, 6.31, 5.98, 5.88],
      },
      {
        fund: "Deniz Portföy Yönetimi Fonu",
        values: [6.22, 6.18, 5.97, 5.61, 5.43],
      },
      {
        fund: "Yapı Kredi Portföy Yönetimi Fonu",
        values: [6.55, 6.3, 6.15, 5.82, 5.74],
      },
      {
        fund: "Atlas Portföy Yönetimi Fonu",
        values: [6.65, 6.42, 6.31, 5.98, 5.88],
      },
      {
        fund: "Deniz Portföy Yönetimi Fonu",
        values: [6.22, 6.18, 5.97, 5.61, 5.43],
      },
      {
        fund: "Yapı Kredi Portföy Yönetimi Fonu",
        values: [6.55, 6.3, 6.15, 5.82, 5.74],
      },
      {
        fund: "Garanti Portföy Yönetimi Fonu",
        values: [5.95, 5.85, 5.64, 5.45, 5.31],
      },
      {
        fund: "İş Portföy Yönetimi Fonu",
        values: [6.11, 6.08, 5.94, 5.7, 5.48],
      },
      {
        fund: "QNB Portföy Yönetimi Fonu",
        values: [6.23, 6.2, 6.1, 5.9, 5.78],
      },
      {
        fund: "Akbank Portföy Hisse Senedi Fonu",
        values: [6.78, 6.51, 6.29, 5.99, 5.84],
      },
      {
        fund: "TEB Portföy Değer Fonu",
        values: [6.35, 6.21, 6.03, 5.88, 5.72],
      },
      {
        fund: "Halk Portföy Yönetimi Fonu",
        values: [6.52, 6.28, 6.04, 5.77, 5.63],
      },
      {
        fund: "Vakıf Portföy Karma Fon",
        values: [6.44, 6.18, 5.96, 5.71, 5.52],
      },
      {
        fund: "Ziraat Portföy Katılım Fonu",
        values: [6.33, 6.14, 5.97, 5.85, 5.66],
      },
    ],
    scale: [5, 7],
  };

  const tableRef = useRef<HTMLTableElement>(null);
  const [barTop, setBarTop] = useState(0);
  const [barHeight, setBarHeight] = useState(0);

  const colorScale = useMemo(
    () =>
      scaleSequential(interpolateBlues)
        .domain([data.scale[1], data.scale[0]]) // reverse so higher = lighter
        .clamp(true),
    [data.scale]
  );

  useEffect(() => {
    if (!tableRef.current) return;
    const table = tableRef.current;
    const firstRow = table.querySelector("tbody tr");
    const tbody = table.querySelector("tbody");

    if (firstRow && tbody) {
      const containerTop = table.getBoundingClientRect().top;
      const firstRowTop = (firstRow as HTMLElement).getBoundingClientRect().top;
      const offset = firstRowTop - containerTop;

      // set offset so gradient bar aligns with the first row
      setBarTop(offset);

      // match height to table body (not header)
      const bodyHeight = (tbody as HTMLElement).getBoundingClientRect().height;
      setBarHeight(bodyHeight);
    }
  }, [data.metrics.length]);

  return (
    <div className="relative bg-[#0b0f19] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-2xl mt-8">
      {/* === Table === */}
      <div className="overflow-x-auto relative z-10">
        <table
          ref={tableRef}
          className="w-full text-sm text-gray-300 border-collapse"
        >
          <thead>
            <tr className="text-gray-400 border-b border-white/10 text-left">
              <th className="pb-3 pr-4 font-medium">Fund</th>
              {[1, 2, 3, 4, 5].map((i) => (
                <th key={i} className="text-center pb-3 font-medium">
                  Metric {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.metrics.map((row, i) => (
              <tr key={i} className="border-t border-white/5">
                <td className="py-2 pr-4 whitespace-nowrap text-gray-300 font-medium">
                  {row.fund}
                </td>
                {row.values.map((v, j) => (
                  <td
                    key={j}
                    className="py-2 text-center text-xs text-white cursor-pointer transition-all"
                    style={{
                      backgroundColor: colorScale(v),
                      opacity: 0.9,
                    }}
                  >
                    {v.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === Dynamic Color Scale Bar === */}
      <div
        className="absolute right-4 w-[14px] rounded-full overflow-hidden border border-white/10 transition-all"
        style={{
          top: `${barTop + 30}px`, // +6px for subtle fine-tuning
          height: `${barHeight}px`,
        }}
      >
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(to top, #ff0000, #ffcc00, #00ff00)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default RiskHeatmap;
