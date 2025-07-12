import React from 'react';
import { Teacher } from '../types/teacher';

interface Props {
  teacher: Teacher;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TeacherCard: React.FC<Props> = ({ teacher, onView, onEdit, onDelete }) => (
  <div className="relative bg-white shadow rounded-2xl p-6 flex flex-col items-center gap-3 w-full h-full min-h-[220px] sm:max-w-xs border border-transparent hover:border-blue-400 hover:shadow-xl transition-all duration-200 group overflow-hidden cursor-pointer" style={{background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)'}}>
    <img
      src={teacher.avatar || `https://i.pravatar.cc/100?img=${teacher.id}`}
      alt={teacher.name}
      className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-400 shadow-sm transition"
    />
    <div className="flex-1 min-w-0 w-full text-center">
      <button
        className="mt-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-full shadow-sm flex items-center gap-1 mx-auto transition"
        onClick={() => onEdit(teacher.id)}
        aria-label={`Edit ${teacher.name}`}
      >
        <span>✏️</span> Edit
      </button>
      <div className="font-bold text-lg text-gray-900 truncate mb-1">{teacher.name}</div>
      <div className="text-gray-500 text-sm truncate mb-2">{teacher.email}</div>
      {teacher.subject && (
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-1">{teacher.subject}</span>
      )}
      {teacher.department && (
        <div className="text-xs text-purple-600 mt-1 font-medium">{teacher.department}</div>
      )}
      {teacher.qualifications && (
        <div className="text-xs text-gray-400 mt-0.5">{teacher.qualifications}</div>
      )}
    </div>
    <div className="flex justify-center mt-4 w-full">
      <button
        className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold shadow-sm hover:ring-2 hover:ring-blue-200 focus:outline-none transition-all duration-150"
        aria-label={`View details for ${teacher.name}`}
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.location.href = `/teachers/${teacher.id}`;
          }
        }}
      >
        <span className="material-icons text-base">info</span> 
      </button>
    </div>
  </div>
);

export default TeacherCard;
