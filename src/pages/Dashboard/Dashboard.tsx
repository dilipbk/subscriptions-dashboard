import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

import { useGetUsersQuery, useGetSubscriptionsQuery } from "../../api/apiSlice";
import { useDataCount } from "../../common/hooks/useDataCount";
import useDataSelector from "../../common/hooks/useDataSelector";
import Loading from "../../common/components/Placeholder/Loading";
import Error from "../../common/components/Placeholder/Error";
import { usersReceived } from "../../features/slices/userSlice";
import { subscriptionsReceived } from "../../features/slices/subscriptionSlice";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [subscriptionStatusData, setSubscriptionStatusData] = useState([]);
  const [loading, setLoading] = useState(true);

  const users = useSelector((state) => state.users.data);
  const subscriptions = useSelector((state) => state.subscriptions.data);

  const usersError = useSelector((state) => state.users.error);
  const subscriptionError = useSelector((state) => state.subscriptions.error);

  useEffect(() => {
    const { selectPaginatedUsers } = useDataSelector(users);
    setVisibleUsers(() => selectPaginatedUsers(limit, page));
  }, [users, limit, page]);

  useEffect(() => {
    if (users && subscriptions) setLoading(false);
  }, [users, subscriptions]);

  const { plansCount, subscribersCount, expiredCount } =
    useDataCount(subscriptions);

  useEffect(() => {
    const { selectSubscriptionPlans } = useDataSelector(subscriptions);
    if (subscriptions) setSubscriptionPlans(() => selectSubscriptionPlans());

    if (subscriptions && expiredCount)
      setSubscriptionStatusData(() => [
        { name: "Valid", count: subscriptions.length - expiredCount },
        { name: "Invalid", count: expiredCount },
      ]);
  }, [subscriptions, expiredCount]);

  const onPieEnter = (_, index: number) => {
    setActiveIndex(index);
  };

  const limitHandler = (e) => {
    setLimit(e.target.value);
  };

  const pageHandler = (pageNo) => {
    if (pageNo === -1 || pageNo === "+1")
      setPage((prev) => prev + Number(pageNo));
    else setPage(pageNo);
  };

  return (
    <main className="dashoard-home">
      {loading && <Loading />}
      {usersError || subscriptionError ? (
        <Error message="Something Went wrong" />
      ) : null}
      {users && subscriptions && (
        <div className="container">
          <div className="dashboard-summary__cards flex wrap gap-1 items-center">
            <SummaryCard
              color="danger"
              title="Users"
              data={users?.length}
              Icon={HiUsers}
            />
            <SummaryCard
              color="violet"
              title="Subscription Plans"
              data={plansCount}
              Icon={RiPriceTag3Fill}
            />
            <SummaryCard
              color="success"
              title="Total Subscribers"
              data={subscribersCount}
              Icon={HiUserGroup}
            />
            <SummaryCard
              color="primary"
              title="Expired"
              data={expiredCount}
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
                  <Table data={visibleUsers} />
                </div>
                <TableSummary
                  limit={limit}
                  page={page}
                  onLimitChangeHandler={limitHandler}
                  onPageChageHandler={pageHandler}
                  usersCount={users?.length}
                />
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
                      <BarChart data={subscriptionPlans}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="plan" fontSize={12}></XAxis>
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Legend
                          iconType="square"
                          align="right"
                          verticalAlign="top"
                          height={50}
                        />
                        <Bar
                          dataKey="usersCount"
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
                          data={subscriptionStatusData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
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
      )}
    </main>
  );
};

export default Dashboard;
