import Head from 'next/head';
import React from 'react';
import SalarySheetTable from '../components/SalarySheetTable';

export default function PaymentsPage() {
  return (
    <>
      <Head>
        <title>TeachHub</title>
        <meta name="description" content="View salary sheets for each teacher" />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-2" aria-label="Payments main content">
        <div className="w-full max-w-screen-lg mx-auto py-12">
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">TeachHub</h1>
          <p className="text-gray-600 mb-8 text-center">View detailed salary sheets for each teacher.</p>
          <div className="w-full h-full max-w-[1200px] mx-auto overflow-x-auto">
            <SalarySheetTable />
          </div>
        </div>
      </main>
    </>
  );
}
