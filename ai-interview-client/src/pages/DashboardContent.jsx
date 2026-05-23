import StatsCard from "../components/StatsCard";

function DashboardContent() {
  return (
    <div className="mt-8">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Interviews"
          value="24"
        />

        <StatsCard
          title="Average Score"
          value="89%"
        />

        <StatsCard
          title="Confidence"
          value="92%"
        />

        <StatsCard
          title="Completed"
          value="18"
        />

      </div>

      <div className="glass rounded-3xl p-8 mt-8 h-[350px]">

        <h2 className="text-white text-2xl font-bold mb-6">
          Performance Analytics
        </h2>

        <div className="h-[220px] flex items-center justify-center text-gray-500">
          Charts Coming Soon
        </div>

      </div>

    </div>
  );
}

export default DashboardContent;