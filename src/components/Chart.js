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
import { faker } from '@faker-js/faker';
import { Box, Stack, Text } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Balance',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'green',
      backgroundColor: 'green',
    },
  ],
};

function Chart() {
  return (
    <Stack
      flexBasis="40%"
      align="center"
      paddingTop={10}
      backgroundColor="#171624"
      rounded={20}
    >
      <Text color="#80808d">Balance</Text>
      <Line options={options} data={data} />;
    </Stack>
  );
}

export default Chart;
