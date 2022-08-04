import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

const AnotherGraph = ({ data }) => {
  return (
    <BarChart width={200} height={200} data={data}>
      <CartesianGrid strokeDasharray=" 3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Last Month" fill="#8884d8" />
      <Bar dataKey="This Month" fill="#82ca9d" />
    </BarChart>
  );
};

export default AnotherGraph;
