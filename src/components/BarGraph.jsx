import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useFetch } from "../hooks/useFetch";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const fetchData = async () => {
    const res = await fetch("https://viaje.ai/mainvia_api/");
    const data = await res.json();
    return data.data;
  };

  const { data, loading, error } = useFetch(fetchData);

  if (loading)
    return <p className="text-center text-blue-500">Loading chart...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load data</p>;
  if (!data || data.length === 0)
    return <p className="text-center">No booking data available</p>;

  const date = data.map((item) => item["0"]);
  const viaRoute = data.map((item) => item["1"]);
  const mainRoute = data.map((item) => item["2"]);

  const chartData = {
    labels: date,
    datasets: [
      {
        label: "Main Route (Mumbai → Bangalore)",
        data: mainRoute,
        backgroundColor: "#BFDBFE",
      },
      {
        label: "Via Route (Mumbai → Pune → Solapur → Bangalore)",
        data: viaRoute,
        backgroundColor: "#9CA3AF",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Daily Bus Bookings: Main vs Via Route" },
      tooltip: { mode: "index", intersect: false },
    },
    interaction: { mode: "index", intersect: false },
    scales: {
      x: { stacked: false },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
        title: { display: true, text: "Number of Bookings" },
      },
    },
  };

  return (
    <div className="w-full  mx-auto">
      <div
        className="relative w-[70vw] md:w-[40vw]"
        style={{ height: "400px" }}
      >
        <Bar key={data.length} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
