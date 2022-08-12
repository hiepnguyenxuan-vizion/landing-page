import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface ReChartProps {}

const ReChart: React.FC<ReChartProps> = () => {
  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Value Of Website Features - VIRTUAL TOURS',
        },
      },
    }),
    []
  );

  const labels = useMemo(
    () => [
      'All Buyers',
      '22 - 30',
      '31 - 40',
      '41 - 55',
      '56 - 65',
      '66 - 74',
      '75 - 95',
    ],
    []
  );
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: '2019',
          data: [48, 40, 44, 49, 48, 45, 38],
          borderColor: '#A500F9',
          backgroundColor: '#A500F9',
        },
        {
          label: '2020',
          data: [58, 60, 64, 61, 51, 46, 42],
          borderColor: '#F73E3E',
          backgroundColor: '#F73E3E',
        },
      ],
    }),
    [labels]
  );

  return <Line options={options} data={data} />;
};

export default ReChart;
