import { useFetch } from "../hooks/useFetch";

function SeatInfoTable() {
  const fetchData = async () => {
    try {
      const res = await fetch("https://viaje.ai/seatinfo_api/");
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch table data");
    }
  };
  const { data, loading, error } = useFetch(fetchData);
  return (
    <div className="mx-6">
      {loading && (
        <table className="min-w-full border border-blue-300 text-xl bg-white shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2 border border-blue-300">Seat</th>
              <th className="px-4 py-2 border border-blue-300">Price</th>
              <th className="px-4 py-2 border border-blue-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, idx) => (
              <tr key={idx} className="text-center animate-pulse">
                <td className="px-4 py-2 border border-blue-300 bg-gray-100 h-10"></td>
                <td className="px-4 py-2 border border-blue-300 bg-gray-100 h-10"></td>
                <td className="px-4 py-2 border border-blue-300 bg-gray-100 h-10"></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!loading && error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}
      {!loading && !error && data.length > 0 && (
        <table className="min-w-full border border-blue-300 text-xl bg-white shadow-lg relative z-10">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2 text-center border border-blue-300">
                Seat
              </th>
              <th className="px-4 py-2 text-center border border-blue-300">
                Price
              </th>
              <th className="px-4 py-2 text-center border border-blue-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ seat_no, price, status }, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-4 py-2 border border-blue-300">{seat_no}</td>
                <td className="px-4 py-2 border border-blue-300">{price}</td>
                <td className="px-4 py-2 border border-blue-300">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SeatInfoTable;
