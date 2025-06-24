import { Link, useLoaderData } from 'react'; // Fixed router import

const AllGroup = () => {
  const GroupData = useLoaderData();

  return (
    <div className="p-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full --body_background shadow-lg rounded-xl overflow-hidden">
          <thead style={{ backgroundColor: '#2563EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Profile</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold --body-color">Hobby Category</th>
              <th className="px-6 py-3 text-sm --body-color"></th>
            </tr>
          </thead>
          <tbody className="--body_background divide-y divide-gray-200">
            {GroupData.map((person, index) => (
              <tr
                key={index}
                className="hover:bg-[#22c55e20] transition-colors"
              >
                <td className="px-6 py-4">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={
                      person.imageUrl ||
                      'https://via.placeholder.com/30x30.png?text=👤'
                    }
                    alt="Profile"
                  />
                </td>
                <td className="px-6 py-4 text-sm --body-color">{person.userName}</td>
                <td className="px-6 py-4 text-sm --body-color">{person.userEmail}</td>
                <td className="px-6 py-4 text-sm --body-color">{person.category}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/groupDetails/${person._id}`}
                    className="bg-[#22c55e] hover:bg-[#006666] transition --body-color px-4 py-2 rounded-2xl text-sm font-medium"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGroup;
