import SummaryCard from "../../common/components/Cards/SummaryCard";
import { HiUsers } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { RiPriceTag3Fill } from "react-icons/ri";
import { RiFolderWarningFill } from "react-icons/ri";

import { ResponsiveContainer } from "recharts";

import Table from "../../common/components/Table/Table";
import DataChart from "../../common/components/Chart/DataChart";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <main className="dashoard-home">
      <div className="container">
        <div className="dashboard-summary__cards flex wrap gap-1 items-center">
          <SummaryCard color="danger" title="Users" data="500" Icon={HiUsers} />
          <SummaryCard
            color="success"
            title="Subscribers"
            data="500"
            Icon={HiUserGroup}
          />
          <SummaryCard
            color="violet"
            title="Subscriptions"
            data="500"
            Icon={RiPriceTag3Fill}
          />
          <SummaryCard
            color="primary"
            title="Expired"
            data="500"
            Icon={RiFolderWarningFill}
          />
        </div>
        <div className="dashboard-content">
          <div className="users-information">
            <div className="users-title">
              <h3 className="text-md">Users Details</h3>
            </div>
            <div className="users-content bg-white">
              <div className="content-table">
                <Table />
              </div>
              <div className="table-summary flex justify-between items-center text-sm">
                <div className="result-count flex items-center gap-1">
                  <div className="count-selector">
                    <label htmlFor="count-changer">Show Results</label>
                    <select name="count-changer" id="count-changer">
                      <option value="10" defaultChecked>
                        10
                      </option>
                      <option value="20">20</option>
                      <option value="10o">100</option>
                    </select>
                  </div>
                  <div className="page">
                    <p>Page: 1</p>
                  </div>
                  <div className="results-of">Showing 10 / 100</div>
                </div>
                <div className="pagination flex items-center">
                  <button className="prev page">Prev</button>
                  <button className="first page">1</button>
                  <button className="second page active">2</button>
                  <button className="third page">3</button>
                  <button className="escape">...</button>
                  <button className="last page">30</button>
                  <button className="next page">Next</button>
                </div>
              </div>
            </div>
          </div>
          <div className="subscriptions-summary">
            <ResponsiveContainer width={"99%"} minHeight={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis fontSize={12} width={30} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
