import { useRouter } from 'next/router';
import React from 'react';
import { Teacher } from '../../types/teacher';

import { sampleTeachers } from '../teachers';

const TeacherDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const teacher = sampleTeachers.find((t: Teacher) => t.id === Number(id));

  if (!teacher) {
    return <div className="min-h-screen flex items-center justify-center text-2xl text-gray-400">Teacher not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white py-12 px-2 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full flex flex-col items-center">
        <img
          src={teacher.avatar || `https://i.pravatar.cc/100?img=${teacher.id}`}
          alt={teacher.name}
          className="w-32 h-32 rounded-full shadow-lg object-cover border-4 border-blue-100 mb-4 bg-white"
        />
        <div className="text-3xl font-bold text-gray-900 mb-2">{teacher.name}</div>
        <div className="text-base text-gray-500 mb-2">{teacher.email}</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {teacher.subject && (
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{teacher.subject}</span>
          )}
          {teacher.department && (
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">{teacher.department}</span>
          )}
        </div>
        <div className="w-full text-left space-y-2">
          {teacher.qualifications && (
            <div><span className="font-semibold text-gray-700">Qualifications:</span> {teacher.qualifications}</div>
          )}
          {teacher.phone && (
            <div><span className="font-semibold text-gray-700">Phone:</span> {teacher.phone}</div>
          )}
          {teacher.address && (
            <div><span className="font-semibold text-gray-700">Address:</span> {teacher.address}</div>
          )}
          {teacher.dateOfBirth && (
            <div><span className="font-semibold text-gray-700">Date of Birth:</span> {teacher.dateOfBirth}</div>
          )}
          {teacher.createdAt && (
            <div><span className="font-semibold text-gray-700">Joined:</span> {teacher.createdAt}</div>
          )}
        </div>
        {/* Additional Details */}
        <div className="w-full mt-6 space-y-2">
          {teacher.gender && (
            <div><span className="font-semibold text-gray-700">Gender:</span> {teacher.gender}</div>
          )}
          {teacher.nationality && (
            <div><span className="font-semibold text-gray-700">Nationality:</span> {teacher.nationality}</div>
          )}
          {teacher.experience !== undefined && (
            <div><span className="font-semibold text-gray-700">Experience:</span> {teacher.experience} years</div>
          )}
          {teacher.bio && (
            <div><span className="font-semibold text-gray-700">Bio:</span> <span className="text-gray-600">{teacher.bio}</span></div>
          )}
          {teacher.emergencyContact && (
            <div><span className="font-semibold text-gray-700">Emergency Contact:</span> {teacher.emergencyContact}</div>
          )}
          <div className="flex gap-3 mt-3">
            {teacher.linkedin && (
              <a href={teacher.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-1">
                <span className="material-icons text-base">linkedin</span> LinkedIn
              </a>
            )}
            {teacher.twitter && (
              <a href={teacher.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">
                <span className="material-icons text-base">twitter</span> Twitter
              </a>
            )}
          </div>
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow flex items-center gap-2 transition"
        onClick={() => alert(`Edit teacher ${teacher.name}`)}
      >
        <span>✏️</span> Edit
      </button>
      <button
        className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold shadow hover:scale-105 transition"
        onClick={() => router.push('/teachers')}
      >
        Back to Teachers
      </button>
    </div>
  );
};

export default TeacherDetailsPage;
