import React from 'react';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">{statusCode || 'Error'}</h1>
        <p className="text-gray-700 mb-2">
          {statusCode
            ? `An error ${statusCode} occurred on server.`
            : 'An error occurred on client.'}
        </p>
        <a href="/" className="text-blue-600 hover:underline">Go to Dashboard</a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
