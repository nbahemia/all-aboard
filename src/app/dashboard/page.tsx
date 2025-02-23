import Sidebar from "@/app/_components/Sidebar";
import ClubCard from "../_components/ClubCard";


function Dashboard() {
  return (
    <div className="flex h-screen bg-[#d9dee3]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-60 overflow-y-auto">
        <div className="flex flex-wrap justify-start pl-24 r gap-6">
          <ClubCard/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
