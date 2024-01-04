import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <div className="content">
              S.N
              <div className="sorter">
                <span>
                  <IoMdArrowDropup />
                </span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              ID
              <div className="sorter">
                <span>
                  <IoMdArrowDropup />
                </span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Name
              <div className="sorter">
                <span>
                  <IoMdArrowDropup />
                </span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </th>

          <th>
            <div className="content">
              Email
              <div className="sorter">
                <span>
                  <IoMdArrowDropup />
                </span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Address
              <div className="sorter">
                <span>
                  <IoMdArrowDropup />
                </span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </th>

          <th>
            <div className="content">
              Joined on
              <div className="sorter">
                <span>
                  <IoMdArrowDropup />
                </span>
                <span>
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user, index) => (
          <tr key={user.id}>
            <td>{user.id - 4563}</td>
            <td>{user.id}</td>
            <td>{`${user.first_name} ${user.middle_name} ${user.last_name}`}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{new Date(+user.join_date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
