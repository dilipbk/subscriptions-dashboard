import { useEffect } from "react";

import { IoSearchOutline } from "react-icons/io5";
import Table from "../../common/components/Table/Table";
import TableSummary from "../../common/components/Table/TableSummary";
import { useSelector } from "react-redux";
import { useState } from "react";

import useDataSelector from "../../common/hooks/useDataSelector";
import Loading from "../../common/components/Placeholder/Loading";
import Error from "../../common/components/Placeholder/Error";

const Users = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const [search, setSearch] = useState("");

  const users = useSelector((state) => state.users.data);
  const usersError = useSelector((state) => state.users.error);
  const usersLoading = useSelector((state) => state.users.status);

  const { selectPaginatedUsers } = useDataSelector();

  useEffect(() => {
    setVisibleUsers(() =>
      selectPaginatedUsers(limit, page).filter((user) =>
        Object.values(user).toString().includes(search)
      )
    );
  }, [users, limit, page, search]);

  const limitHandler = (e) => {
    setLimit(e.target.value);
  };

  const pageHandler = (pageNo) => {
    if (pageNo === -1 || pageNo === "+1")
      setPage((prev) => prev + Number(pageNo));
    else setPage(pageNo);
  };

  if (usersLoading === "loading") return <Loading />;
  if (usersError) <Error message="Something went wrong" />;

  return (
    <main className="users-container">
      <div className="container">
        <div className="table-header bg-white flex items-center justify-between">
          <div className="page-title">
            <h4 className="text-md font-medium">Users Detail</h4>
          </div>
          <div className="user-search">
            <input
              type="text"
              name="user"
              id="user-search"
              placeholder="Search User..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <IoSearchOutline />
            </button>
          </div>
        </div>
        <div className="users-data__container bg-white">
          <div className="users-data__table">
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
    </main>
  );
};

export default Users;
