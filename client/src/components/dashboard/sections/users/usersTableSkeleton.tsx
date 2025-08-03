// Skeleton component for table rows
const TableRowSkeleton = () => (
  <tr className="animate-pulse">
    <td className="px-6 py-5 whitespace-nowrap">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
        <div className="ml-4">
          <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </td>
    <td className="px-6 py-5 whitespace-nowrap">
      <div className="h-4 bg-gray-200 rounded w-20"></div>
    </td>
    <td className="px-6 py-5 whitespace-nowrap">
      <div className="h-4 bg-gray-200 rounded w-28"></div>
    </td>
    <td className="px-6 py-5 whitespace-nowrap">
      <div className="h-6 bg-gray-200 rounded-full w-16"></div>
    </td>
    <td className="px-6 py-5 whitespace-nowrap text-right">
      <div className="flex space-x-2 justify-end">
        <div className="h-8 bg-gray-200 rounded w-12"></div>
        <div className="h-8 bg-gray-200 rounded w-14"></div>
      </div>
    </td>
  </tr>
);

// Table skeleton component
const TableSkeleton = () => (
  <table className="min-w-full">
    <thead>
      <tr className="border-b border-gray-100">
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
          User
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
          Role
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
          Phone Number
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
          Status
        </th>
        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-50">
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRowSkeleton key={index} />
      ))}
    </tbody>
  </table>
);
export default TableSkeleton;
