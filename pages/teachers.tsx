import React, { useEffect, useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import { Teacher } from '../types/teacher';

const departments = ['Science', 'Arts', 'Social Studies', 'IT', 'Languages', 'Business', 'Sports', 'Music'];
const qualificationsList = [
  'MSc', 'MA', 'PhD', 'BEd', 'MEd', 'BA', 'BSc', 'Diploma', 'Certificate'
];
const nationalities = ['American', 'Canadian', 'British', 'Australian', 'Indian', 'Irish', 'German', 'French', 'Spanish'];
const bios = [
  'Passionate about teaching and inspiring students.',
  'Dedicated educator with years of classroom experience.',
  'Loves making learning fun and interactive.',
  'Mentors students in competitions and projects.',
  'Believes in hands-on learning and real-world applications.',
  'Encourages creativity and critical thinking.',
  'Focuses on student growth and well-being.',
  'Integrates technology into the classroom.',
  'Enjoys organizing extracurricular activities.'
];
const sampleTeachers: (Teacher & {
  gender?: string;
  nationality?: string;
  experience?: number;
  bio?: string;
  emergencyContact?: string;
  linkedin?: string;
  twitter?: string;
})[] = Array.from({ length: 20 }, (_, i) => {
  const gender = i % 2 === 0 ? 'Female' : 'Male';
  const department = departments[i % departments.length];
  const qualifications = `${qualificationsList[i % qualificationsList.length]}, ${qualificationsList[(i+1) % qualificationsList.length]}`;
  const nationality = nationalities[i % nationalities.length];
  const experience = 5 + (i % 20);
  const bio = bios[i % bios.length];
  const phone = `555-${100 + i}-${1000 + i}`;
  const address = `${100 + i} Main St, City ${i+1}`;
  const dateOfBirth = `198${i%10}-0${(i%9)+1}-${(i%28)+1}`;
  const emergencyContact = `${gender === 'Female' ? 'John' : 'Mary'} Doe: 555-${200 + i}-${2000 + i}`;
  const linkedin = `https://linkedin.com/in/teacher${i+1}`;
  const twitter = `https://twitter.com/teacher${i+1}`;
  const avatar = `https://randomuser.me/api/portraits/${gender === 'Female' ? 'women' : 'men'}/${(i%40)+1}.jpg`;
  const createdAt = `202${i%5}-0${((i%12)+1)}-1${i%9}`;
  return {
    id: i + 1,
    name: [
      'Alice Smith', 'Bob Johnson', 'Carol Williams', 'David Brown', 'Eva Miller',
      'Frank Wilson', 'Grace Moore', 'Henry Taylor', 'Ivy Anderson', 'Jack Thomas',
      'Kathy Jackson', 'Leo White', 'Mona Harris', 'Nate Martin', 'Olivia Thompson',
      'Paul Garcia', 'Quincy Martinez', 'Rita Clark', 'Sam Lewis', 'Tina Lee',
      'Uma Walker', 'Victor Hall', 'Wendy Allen', 'Xander Young', 'Yara King',
      'Zane Wright', 'Amy Scott', 'Brian Green', 'Cindy Adams', 'Derek Baker',
      'Ella Nelson', 'Fred Carter', 'Gina Mitchell', 'Harry Perez', 'Isla Roberts',
      'Jake Turner', 'Kim Evans', 'Liam Edwards', 'Maya Collins', 'Noah Stewart'
    ][i],
    email: `teacher${i + 1}@school.edu`,
    subject: [
      'Mathematics', 'Science', 'English', 'History', 'Geography',
      'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Art',
      'Music', 'Physical Education', 'Economics', 'Business', 'Drama',
      'French', 'Spanish', 'German', 'Philosophy', 'Psychology',
      'Sociology', 'Political Science', 'Environmental Science', 'IT', 'Robotics',
      'Graphic Design', 'Accounting', 'Marketing', 'Law', 'Statistics',
      'Anthropology', 'Linguistics', 'Media Studies', 'Engineering', 'Astronomy',
      'Civics', 'Ethics', 'Architecture', 'Geology', 'Zoology'
    ][i],
    avatar,
    createdAt,
    department,
    qualifications,
    address,
    dateOfBirth,
    gender,
    nationality,
    experience,
    bio,
    phone,
    emergencyContact,
    linkedin,
    twitter,
  };
});

const TeachersPage: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(sampleTeachers);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const handleView = (id: number) => {
    // TODO: Show teacher details modal/page
    alert('View teacher ' + id);
  };
  const handleEdit = (id: number) => {
    // TODO: Show edit form/modal
    alert('Edit teacher ' + id);
  };
  const handleDelete = (id: number) => {
    // TODO: Confirm and delete
    alert('Delete teacher ' + id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white py-12 px-2">
      <h1 className="text-4xl font-extrabold mb-2 text-center text-gray-900 drop-shadow">Teachers</h1>
      <p className="text-lg text-gray-500 mb-8 text-center">Browse and manage your teaching staff with ease and style.</p>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 md:p-4 bg-white/60 rounded-xl shadow-lg">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="w-full h-full">
              <TeacherCard
                teacher={teacher}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { sampleTeachers };
export default TeachersPage;


