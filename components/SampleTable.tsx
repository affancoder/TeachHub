import React from 'react';

type Row = { name: string; subject: string; email: string; status: string };
const rows: Row[] = [
  { name: 'Alice Smith', subject: 'Math', email: 'alice@school.edu', status: 'Active' },
  { name: 'Bob Johnson', subject: 'Science', email: 'bob@school.edu', status: 'Active' },
  { name: 'Carol Williams', subject: 'English', email: 'carol@school.edu', status: 'Inactive' },
  { name: 'David Brown', subject: 'History', email: 'david@school.edu', status: 'Active' },
  { name: 'Eva Miller', subject: 'Art', email: 'eva@school.edu', status: 'Active' },
];

const statusColor = (status: string) =>
  status === 'Active' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';

const SampleTable: React.FC = () => (
  <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
    <h2 className="text-lg font-bold mb-4">Recent Teachers</h2>
    <table className="min-w-full text-sm" aria-label="Recent Teachers Table">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left" scope="col">Name</th>
          <th className="px-4 py-2 text-left" scope="col">Subject</th>
          <th className="px-4 py-2 text-left" scope="col">Email</th>
          <th className="px-4 py-2 text-left" scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b hover:bg-blue-50 transition">
            <td className="px-4 py-2 font-medium">{row.name}</td>
            <td className="px-4 py-2">{row.subject}</td>
            <td className="px-4 py-2">{row.email}</td>
            <td className={`px-4 py-2 ${statusColor(row.status)} rounded`} aria-label={`Status: ${row.status}`}>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SampleTable;
