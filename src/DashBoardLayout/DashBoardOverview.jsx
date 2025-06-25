import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
// import { AuthContext } from "../Context/AuthContext";

// Mocked or fetched data (you can fetch from API)

const DashboardOverview = () => {
  const { myUser } = useContext(AuthContext); // Assuming user contains { name, email }
  const [allItems, setAllItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  console.log(myUser)
  let data=useLoaderData();
console.log()
  useEffect(() => {
    // Normally you'd fetch data here
    setAllItems(data);

    if (myUser?.email) {
      const filtered = data.filter(item => item.userEmail === myUser.email);
      setMyItems(filtered);
    }
  }, [myUser,data]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overveiw</h2>

      {/* ✅ Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Items</h3>
          <p className="text-3xl font-bold text-blue-600">{allItems.length}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">My Items</h3>
          <p className="text-3xl font-bold text-green-600">{myItems.length}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">My Categories</h3>
          <p className="text-3xl font-bold text-orange-500">
            {Array.from(new Set(myItems.map(item => item.category))).length}
          </p>
        </div>
      </div>

      {/* ✅ Logged-in User Info */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">User Info:</h3>
        <p><span className="font-medium">Name:</span> {myUser?.displayName || "N/A"}</p>
        <p><span className="font-medium">Email:</span> {myUser?.email || "N/A"}</p>
      </div>

      {/* ✅ Section 1: Recent My Items */}
<div className="bg-white shadow rounded-xl p-6">
  <h3 className="text-xl font-semibold mb-4">🕒 Recent My Items</h3>
  {myItems.slice(0, 5).map((item, idx) => (
    <div key={item._id || idx} className="border-b py-2">
      <p className="font-medium">{item.groupName || "Unnamed Group"}</p>
      <p className="text-sm text-gray-600">{item.category}</p>
    </div>
  ))}
  {myItems.length === 0 && (
    <p className="text-gray-500">You haven’t added any items yet.</p>
  )}
</div>


{/* ✅ Section 2: Top Categories (My Data) */}
<div className="bg-white shadow rounded-xl p-6">
  <h3 className="text-xl font-semibold mb-4">📊 My Top Categories</h3>
  {Object.entries(
    myItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([category, count]) => (
    <p key={category} className="flex justify-between text-gray-700">
      <span>{category}</span>
      <span className="font-semibold">{count}</span>
    </p>
  ))}
  {myItems.length === 0 && (
    <p className="text-gray-500">No category data yet.</p>
  )}
</div>

    </div>
  );
};

export default DashboardOverview;
