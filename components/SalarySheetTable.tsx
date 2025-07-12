import React from 'react';

// Example data, replace with real data source as needed
type SalarySheet = {
  teacherId: string;
  teacherName: string;
  month: string;
  baseSalary: number;
  bonus: number;
  deductions: number;
  netPay: number;
};

const salarySheets: SalarySheet[] = [
  {
    teacherId: 'T001',
    teacherName: 'Alice Johnson',
    month: 'June 2025',
    baseSalary: 50000,
    bonus: 5000,
    deductions: 2000,
    netPay: 53000,
  },
  {
    teacherId: 'T001',
    teacherName: 'Alice Johnson',
    month: 'May 2025',
    baseSalary: 50000,
    bonus: 4000,
    deductions: 3000,
    netPay: 51000,
  },
  {
    teacherId: 'T002',
    teacherName: 'Bob Smith',
    month: 'June 2025',
    baseSalary: 48000,
    bonus: 3000,
    deductions: 1000,
    netPay: 50000,
  },
  {
    teacherId: 'T002',
    teacherName: 'Bob Smith',
    month: 'May 2025',
    baseSalary: 48000,
    bonus: 2500,
    deductions: 800,
    netPay: 49700,
  },
  {
    teacherId: 'T003',
    teacherName: 'Catherine Lee',
    month: 'June 2025',
    baseSalary: 52000,
    bonus: 6000,
    deductions: 2500,
    netPay: 55500,
  },
  {
    teacherId: 'T003',
    teacherName: 'Catherine Lee',
    month: 'May 2025',
    baseSalary: 52000,
    bonus: 5500,
    deductions: 2000,
    netPay: 55500,
  },
  {
    teacherId: 'T004',
    teacherName: 'David Kumar',
    month: 'June 2025',
    baseSalary: 47000,
    bonus: 2000,
    deductions: 500,
    netPay: 48500,
  },
  {
    teacherId: 'T004',
    teacherName: 'David Kumar',
    month: 'May 2025',
    baseSalary: 47000,
    bonus: 1800,
    deductions: 700,
    netPay: 48100,
  },
  {
    teacherId: 'T005',
    teacherName: 'Emma Dsouza',
    month: 'June 2025',
    baseSalary: 51000,
    bonus: 3500,
    deductions: 1200,
    netPay: 53300,
  },
  {
    teacherId: 'T005',
    teacherName: 'Emma Dsouza',
    month: 'May 2025',
    baseSalary: 51000,
    bonus: 3000,
    deductions: 1500,
    netPay: 52500,
  },
];

const SalarySheetTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Teacher ID</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Month</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700">Base Salary</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700">Bonus</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700">Deductions</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700">Net Pay</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {salarySheets.map((sheet) => (
            <tr key={sheet.teacherId + sheet.month} className="hover:bg-blue-50 transition">
              <td className="px-4 py-2 whitespace-nowrap font-mono">{sheet.teacherId}</td>
              <td className="px-4 py-2 whitespace-nowrap">{sheet.teacherName}</td>
              <td className="px-4 py-2 whitespace-nowrap">{sheet.month}</td>
              <td className="px-4 py-2 text-right whitespace-nowrap">₹{sheet.baseSalary.toLocaleString()}</td>
              <td className="px-4 py-2 text-right whitespace-nowrap text-green-600">+₹{sheet.bonus.toLocaleString()}</td>
              <td className="px-4 py-2 text-right whitespace-nowrap text-red-600">-₹{sheet.deductions.toLocaleString()}</td>
              <td className="px-4 py-2 text-right whitespace-nowrap font-bold">₹{sheet.netPay.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalarySheetTable;
