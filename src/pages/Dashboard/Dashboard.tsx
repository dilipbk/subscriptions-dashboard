import { useState } from "react";

import SummaryCard from "../../common/components/Cards/SummaryCard";
import { HiUsers } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { RiPriceTag3Fill } from "react-icons/ri";
import { RiFolderWarningFill } from "react-icons/ri";
import { ResponsiveContainer } from "recharts";

import Table from "../../common/components/Table/Table";
import PieShape from "../../common/components/Chart/PieShape";
import { PieChart, Pie } from "recharts";
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
import TableSummary from "../../common/components/Table/TableSummary";

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

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index: number) => {
    setActiveIndex(index);
  };

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
            <div className="section-title">
              <h3 className="text-md">Users Details</h3>
            </div>
            <div className="users-content bg-white">
              <div className="content-table">
                <Table />
              </div>
              <TableSummary />
            </div>
          </div>
          <div className="subscriptions-stat">
            <div className="section-title">
              <h3 className="text-md">Subscriptions Summary</h3>
            </div>
            <div className="subscriptions-stat__content flex gap-1">
              <div className="subscribers-of-category bg-white grow">
                <div className="chart">
                  <ResponsiveContainer width={"100%"} minHeight={300}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />

                      <XAxis dataKey="name" fontSize={12}></XAxis>
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Legend
                        iconType="square"
                        align="right"
                        verticalAlign="top"
                        height={50}
                      />
                      <Bar
                        dataKey="pv"
                        fill="#783feb"
                        activeBar={<Rectangle fill="#6e55a1" />}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="label">
                  <p className="text-sm text-center font-medium">
                    Subscription Category
                  </p>
                </div>
              </div>
              <div className="subscription-status bg-white grow">
                <div className="chart">
                  <ResponsiveContainer width="100%" minHeight={300}>
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={PieShape}
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="label">
                  <p className="text-sm text-center font-medium">
                    Subscription Status
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
