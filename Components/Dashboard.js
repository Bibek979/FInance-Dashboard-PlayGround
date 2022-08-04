import AnotherGraph from "./graphs/AnotherGraph";
import "./styles.css";
import {
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";
const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      "Last Month": 2000,
      "This Month": 5000
    }
  ];
  return (
    <>
      <h2>Finance Dashboard</h2>
      <div className="gridContainerDashboard">
        <div className="dashboardGrid one">
          <h4 className="cardHeading income">Last 30 days income</h4>
          <AnotherGraph data={data} className="barChart" />
          <h2 className="cardBottom income">&#8377;5000</h2>
        </div>
        <div className="dashboardGrid two">
          <h4 className="cardHeading expense">Last 30 days Expenses</h4>
          <BarChart width={200} height={200} data={data} className="barChart">
            <CartesianGrid strokeDasharray=" 3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Last Month" fill="#8884d8" />
            <Bar dataKey="This Month" fill="#82ca9d" />
          </BarChart>
          <h2 className="cardBottom expense">&#8377;5000</h2>
        </div>
        <div className="dashboardGrid three">3</div>
        <div className="dashboardGrid four">4</div>
        <div className="dashboardGrid five">5</div>
      </div>
    </>
  );
};

export default Dashboard;
