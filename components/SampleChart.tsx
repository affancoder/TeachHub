import React from 'react';

// Simple bar chart using SVG and sample data
const sampleData = [
  { label: 'Math', value: 22 },
  { label: 'Science', value: 14 },
  { label: 'English', value: 18 },
  { label: 'History', value: 9 },
  { label: 'Art', value: 11 },
];

const maxValue = Math.max(...sampleData.map(d => d.value));

const SampleChart: React.FC = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-bold mb-4">Teachers by Subject</h2>
    <svg width="100%" height="180" viewBox="0 0 320 180">
      {sampleData.map((d, i) => (
        <g key={d.label}>
          <rect
            x={20 + i * 60}
            y={160 - (d.value / maxValue) * 120}
            width="40"
            height={(d.value / maxValue) * 120}
            fill="#2563eb"
            rx="6"
          />
          <text
            x={40 + i * 60}
            y={175}
            textAnchor="middle"
            className="fill-gray-700 text-xs"
          >{d.label}</text>
          <text
            x={40 + i * 60}
            y={150 - (d.value / maxValue) * 120}
            textAnchor="middle"
            className="fill-blue-700 font-bold text-base"
          >{d.value}</text>
        </g>
      ))}
    </svg>
  </div>
);

export default SampleChart;
