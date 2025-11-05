import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-black text-white relative">
      <Sidebar />

      <div className="flex-1 ml-64 transition-all duration-300">
        <Navbar />

        <main className="relative z-10 p-6 md:p-10">
          <div className="overflow-x-hidden text-stone-300 antialiased">
            <div className="fixed inset-0 -z-10">
              <div className="relative h-full w-full bg-black">
                <div className="absolute top-[-100px] right-[10%] w-[1100px] h-[850px] rounded-full bg-[radial-gradient(ellipse_at_60%_20%,rgba(41,87,120,0.85)_0%,rgba(41,87,120,0.55)_35%,rgba(0,0,0,0)_75%)] blur-[160px] opacity-95"></div>

                <div className="absolute bottom-[-200px] left-[-200px] w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(41,87,120,0.25)_0%,rgba(0,0,0,0)_70%)] blur-[150px] opacity-70"></div>
              </div>
            </div>
            <Outlet /> {/* Renders the current page here */}
          </div>
        </main>
      </div>
    </div>
  );
}
