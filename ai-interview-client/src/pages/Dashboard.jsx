import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardContent from "../pages/DashboardContent";

function Dashboard() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="ml-[260px] flex-1 p-8">

        <Topbar />

        <DashboardContent />

      </div>

    </div>
  );
}

export default Dashboard;