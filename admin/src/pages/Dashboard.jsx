import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/admin-stats`,
          {
            headers: { token },
          }
        );

        const data = await res.json();

        if (!data.success) {
          toast.error(data.message || "Failed to load stats");
          return;
        }

        setStats(data);
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📊 Admin Dashboard Stats
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Total Items
          </h2>
          <p className="text-4xl font-bold text-blue-600">
            {stats.total_items}
          </p>
        </div>

      
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Total Orders
          </h2>
          <p className="text-4xl font-bold text-green-600">
            {stats.total_orders}
          </p>
        </div>
      </div>
    </div>
  );
}
