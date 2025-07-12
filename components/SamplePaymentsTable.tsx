import React from 'react';

const teachers = [
  {
    id: 1,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    phone: '123-456-7890',
    subject: 'Mathematics',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    createdAt: '2022-01-10',
    department: 'Science',
    qualifications: 'MSc Mathematics',
    address: '123 Main St, Cityville',
    dateOfBirth: '1980-05-15',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '234-567-8901',
    subject: 'Physics',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    createdAt: '2021-09-12',
    department: 'Science',
    qualifications: 'PhD Physics',
    address: '456 Oak Ave, Townsville',
    dateOfBirth: '1975-11-22',
  },
  {
    id: 3,
    name: 'Carol Williams',
    email: 'carol.williams@example.com',
    phone: '345-678-9012',
    subject: 'Chemistry',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    createdAt: '2023-02-18',
    department: 'Science',
    qualifications: 'MSc Chemistry',
    address: '789 Pine Rd, Village',
    dateOfBirth: '1985-03-30',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@example.com',
    phone: '456-789-0123',
    subject: 'Biology',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    createdAt: '2020-06-25',
    department: 'Science',
    qualifications: 'MSc Biology',
    address: '321 Maple St, Hamlet',
    dateOfBirth: '1982-08-17',
  },
  {
    id: 5,
    name: 'Eva Miller',
    email: 'eva.miller@example.com',
    phone: '567-890-1234',
    subject: 'English',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    createdAt: '2024-03-10',
    department: 'Arts',
    qualifications: 'MA English',
    address: '654 Cedar Blvd, City',
    dateOfBirth: '1990-12-05',
  },
  {
    id: 6,
    name: 'Frank Wilson',
    email: 'frank.wilson@example.com',
    phone: '678-901-2345',
    subject: 'History',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    createdAt: '2019-11-30',
    department: 'Social Studies',
    qualifications: 'MA History',
    address: '987 Birch Ln, Metro',
    dateOfBirth: '1978-07-21',
  },
  {
    id: 7,
    name: 'Grace Moore',
    email: 'grace.moore@example.com',
    phone: '789-012-3456',
    subject: 'Geography',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    createdAt: '2023-08-14',
    department: 'Social Studies',
    qualifications: 'MA Geography',
    address: '159 Spruce Dr, Suburb',
    dateOfBirth: '1988-02-11',
  },
];

const payments = [
  { id: 1, teacherId: 1, amount: 500, date: '2025-07-01', status: 'Paid' },
  { id: 2, teacherId: 2, amount: 450, date: '2025-06-28', status: 'Paid' },
  { id: 3, teacherId: 3, amount: 600, date: '2025-06-25', status: 'Pending' },
  { id: 4, teacherId: 4, amount: 400, date: '2025-06-22', status: 'Paid' },
  { id: 5, teacherId: 5, amount: 550, date: '2025-06-20', status: 'Paid' },
  { id: 6, teacherId: 6, amount: 480, date: '2025-06-18', status: 'Paid' },
  { id: 7, teacherId: 7, amount: 520, date: '2025-06-15', status: 'Failed' },
  { id: 8, teacherId: 1, amount: 530, date: '2025-05-30', status: 'Paid' },
  { id: 9, teacherId: 2, amount: 470, date: '2025-05-28', status: 'Pending' },
  { id: 10, teacherId: 3, amount: 610, date: '2025-05-25', status: 'Paid' },
  { id: 11, teacherId: 4, amount: 420, date: '2025-05-22', status: 'Failed' },
  { id: 12, teacherId: 5, amount: 560, date: '2025-05-20', status: 'Paid' },
  { id: 13, teacherId: 6, amount: 490, date: '2025-05-18', status: 'Paid' },
  { id: 14, teacherId: 7, amount: 540, date: '2025-05-15', status: 'Paid' },
  { id: 15, teacherId: 1, amount: 510, date: '2025-04-30', status: 'Paid' },
  { id: 16, teacherId: 2, amount: 455, date: '2025-04-28', status: 'Failed' },
  { id: 17, teacherId: 3, amount: 620, date: '2025-04-25', status: 'Paid' },
  { id: 18, teacherId: 4, amount: 430, date: '2025-04-22', status: 'Paid' },
  { id: 19, teacherId: 5, amount: 570, date: '2025-04-20', status: 'Pending' },
  { id: 20, teacherId: 6, amount: 495, date: '2025-04-18', status: 'Paid' },
];

const statusColor = (status: string) =>
  status === 'Paid' ? 'text-green-600 bg-green-50' : status === 'Pending' ? 'text-yellow-600 bg-yellow-50' : 'text-red-600 bg-red-50';

const SamplePaymentsTable: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 w-full h-full overflow-x-auto">
    {/* Responsive: horizontal scroll on small screens, full width on large */}
    <h2 className="text-lg font-bold mb-4">Recent Payments</h2>
    <table className="min-w-[700px] w-full text-base">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left">Teacher</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Subject</th>
          <th className="px-4 py-2 text-left">Department</th>
          <th className="px-4 py-2 text-left">Amount ($)</th>
          <th className="px-4 py-2 text-left">Date</th>
          <th className="px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((p) => {
          const teacher = teachers.find((t) => t.id === p.teacherId);
          return (
            <tr key={p.id} className="border-b hover:bg-blue-50 transition">
              <td className="px-4 py-2 font-medium flex items-center gap-2">
                {teacher?.avatar && (
                  <img src={teacher.avatar} alt={teacher.name} className="w-8 h-8 rounded-full object-cover" />
                )}
                {teacher?.name}
              </td>
              <td className="px-4 py-2">{teacher?.email}</td>
              <td className="px-4 py-2">{teacher?.subject}</td>
              <td className="px-4 py-2">{teacher?.department}</td>
              <td className="px-4 py-2">{p.amount}</td>
              <td className="px-4 py-2">{p.date}</td>
              <td className={`px-4 py-2 ${statusColor(p.status)} rounded`}>{p.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default SamplePaymentsTable;
