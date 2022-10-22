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
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
      borderColor: 'green',
      backgroundColor: 'green',
    },
  ],
};

function Chart() {
  return (
    <Stack backgroundColor="#171624" rounded={20}>
      <Text paddingTop="30px" color="#80808d">
        Balance
      </Text>
      <Text fontSize="3xl" color="white">
        ${data.datasets[0].data[6]}
      </Text>
      <Line options={options} data={data} />;
    </Stack>
  );
}

export default Chart;
