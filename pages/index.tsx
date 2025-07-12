import Head from 'next/head';
import React, { useState } from 'react';


import Link from 'next/link';
import SampleChart from '../components/SampleChart';
import SampleTable from '../components/SampleTable';


export default function Home() {
  return (
    <>
      <Head>
        <title>TeachHub</title>
        <meta name="description" content="Modern teacher management dashboard" />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-2" aria-label="Dashboard main content">
        <div className="w-full max-w-screen-lg mx-auto py-12">
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-900">TeachHub</h1>
          <p className="text-gray-600 mb-8 text-center">Manage teachers, payments, and more with a modern, responsive interface.</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center w-full">
            <Link href="/teachers" className="flex-1 w-full bg-white rounded-lg shadow p-6 text-center hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-400 transition outline-none" tabIndex={0} aria-label="Go to Teachers page">
              <div className="text-2xl font-bold text-blue-600 mb-2">Teachers</div>
              <div className="text-gray-500">View and manage all teachers</div>
            </Link>

          </div>
          <div className="flex flex-col gap-6 w-full mt-10">
            <div className="w-full h-full overflow-x-auto"><SampleChart /></div>
            <div className="w-full h-full overflow-x-auto"><SampleTable /></div>

          </div>
        </div>
      </main>
    </>
  );
}
