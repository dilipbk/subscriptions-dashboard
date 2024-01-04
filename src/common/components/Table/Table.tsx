import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { FaRegEye } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Table = ({ data }: { data: object[] }) => {
  const [checkedUser, setCheckedUser] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    allChecked
      ? setCheckedUser(() => data.map((item) => item.id))
      : setCheckedUser([]);
  }, [allChecked]);

  const handleUserChecked = (id) => {
    setCheckedUser((prevChecked) => {
      const isItemPresent = prevChecked.some((itemId) => itemId === id);

      if (isItemPresent) {
        return prevChecked.filter((itemId) => itemId !== id);
      } else {
        return [...prevChecked, id];
      }
    });
  };

  const handleCheckAll = () => {
    setAllChecked((prev) => !prev);
  };

  const handleShowUserDetail = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              checked={allChecked}
              onChange={handleCheckAll}
              type="checkbox"
              name="check"
              id="check"
            />
          </th>
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user, index) => (
          <tr key={user.id}>
            <td>
              <input
                checked={checkedUser.some((itemId) => itemId === user.id)}
                type="checkbox"
                name={`user-${user.id}`}
                id={user.id}
                onChange={() => handleUserChecked(user.id)}
              />
            </td>
            <td>{user.id - 4563}</td>
            <td>{user.id}</td>
            <td>{`${user.first_name} ${user.middle_name} ${user.last_name}`}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{new Date(+user.join_date).toLocaleDateString()}</td>
            <td>
              <button
                onClick={() => handleShowUserDetail(user.id)}
                className="btn-sm btn-primary-light no-border flex items-center gap-0_5 rounded-md text-white pointer"
              >
                <FaRegEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
