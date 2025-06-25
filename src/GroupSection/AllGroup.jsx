import { Link, useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import Header from "../Component/Header";

const AllGroup = () => {
  const GroupData = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedData, setSortedData] = useState([]);

  // Sort the data on load by groupName ascending
  useEffect(() => {
    const sorted = [...GroupData].sort((a, b) =>
      (a.groupName || "").localeCompare(b.groupName || "")
    );
    setSortedData(sorted);
  }, [GroupData]);

  // Filtered data based on final search query (after button click)
  const filteredData = sortedData.filter((item) =>
    (item.groupName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.userName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.userEmail || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.category || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Search button click handler
  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  // Clear search handler
  const handleClear = () => {
    setSearchTerm("");
    setSearchQuery("");
  };

  return (
    <>
    <Header></Header>
    <div className="mt-20 p-4">
      {/* 🔍 Search Section */}
      <div className="mb-6 flex flex-col mx-auto md:flex-row md:items-center md:gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="🔍 Search by name, email or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="mt-3 md:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow transition"
        >
          Search
        </button>
      </div>

      {/* 📋 Table Section */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto --body_background shadow-lg rounded-xl overflow-hidden">
          <thead style={{ backgroundColor: '#2563EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Hobby Category</th>
              <th className="px-6 py-3 text-sm --body-color"></th>
            </tr>
          </thead>
          <tbody className="--body_background divide-y divide-gray-200">
            {filteredData.map((person, index) => (
              <tr key={index} className="hover:bg-[#22c55e20] transition-colors">
                <td className="px-2 py-4 text-sm --body-color">{person.userName || "N/A"}</td>
                <td className="px-2 py-4 text-sm --body-color">{person.userEmail || "N/A"}</td>
                <td className="px-2 py-4 text-sm --body-color">{person.category || "N/A"}</td>
                <td className="px-2 py-4">
                  <Link
                    to={`/groupDetails/${person._id}`}
                    className="bg-[#22c55e] hover:bg-[#006666] rounded-xl transition --body-color px-4 py-2 text-sm font-medium"
                  >
                    SeeMore
                  </Link>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-sm text-gray-500">
                  No group found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

export default AllGroup;
