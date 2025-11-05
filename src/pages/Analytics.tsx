import Navbar from "../components/NavBar";
import RiskHeatmap from "../components/RiskHeatmap";
import SectorRiskAnalysis from "../components/SectorRiskAnalysis";
import Sidebar from "../components/SideBar";
import { useSidebar } from "../context/SidebarContext";

const Analytics = () => {
  const { collapsed } = useSidebar();
  const sidebarWidth = collapsed ? "5rem" : "16rem"; // Tailwind w-20 / w-64

  return (
    <div className="min-h-screen  z-10 container mx-auto px-8 py-10 flex flex-col gap-10 ">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black"></div>
        <div className="absolute top-[-100px] right-[10%] w-[1100px] h-[850px] rounded-full bg-[radial-gradient(ellipse_at_60%_20%,rgba(41,87,120,0.85)_0%,rgba(41,87,120,0.55)_35%,rgba(0,0,0,0)_75%)] blur-[160px] opacity-95"></div>
      </div>

      <Sidebar />
      {/* Main Area */}
      <div
        className={`flex  flex-col transition-all duration-300 ${
          collapsed ? "ml-20 w-[calc(100%-5rem)]" : "ml-64 w-[calc(100%-16rem)]"
        }`}
      >
        <Navbar />
        <main
          className="transition-all duration-300 pt-24 pb-12 px-6 sm:px-8 md:px-10 overflow-x-hidden absolute top-0 right-0"
          style={{
            marginLeft: sidebarWidth,
            width: `calc(100% - ${sidebarWidth})`,
          }}
        >
          <RiskHeatmap />
          <SectorRiskAnalysis />
        </main>
      </div>
    </div>
  );
};

export default Analytics;
