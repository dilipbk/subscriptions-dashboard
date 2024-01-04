import { useEffect } from "react";

import { IoSearchOutline } from "react-icons/io5";
import Table from "../../common/components/Table/Table";
import TableSummary from "../../common/components/Table/TableSummary";
import { useSelector } from "react-redux";
import { useState } from "react";

import useDataSelector from "../../common/hooks/useDataSelector";

const Users = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    const { selectPaginatedUsers } = useDataSelector(users);
    setVisibleUsers(() => selectPaginatedUsers(limit, page));
  }, [users, limit, page]);

  console.log(users);

  const limitHandler = (e) => {
    setLimit(e.target.value);
  };

  const pageHandler = (pageNo) => {
    if (pageNo === -1 || pageNo === "+1")
      setPage((prev) => prev + Number(pageNo));
    else setPage(pageNo);
  };

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
