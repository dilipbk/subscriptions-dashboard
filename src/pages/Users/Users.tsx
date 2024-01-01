import { IoSearchOutline } from "react-icons/io5";
import Table from "../../common/components/Table/Table";
import TableSummary from "../../common/components/Table/TableSummary";

const Users = () => {
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
          <Table />
          <TableSummary />
        </div>
      </div>
    </main>
  );
};

export default Users;
