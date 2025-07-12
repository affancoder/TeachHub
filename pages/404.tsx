import React from 'react';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
        <p className="text-gray-700 mb-2">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="text-blue-600 hover:underline">Go to Dashboard</a>
      </div>
    </div>
  );
}
