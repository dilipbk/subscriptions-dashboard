import sortUp from "../../../assets/icons/sort-up.png";
import sortDown from "../../../assets/icons/sort-down.png";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <div className="content">
              S.N
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              ID
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Name
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Status
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Email
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Street
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Country
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
          <th>
            <div className="content">
              Joined on
              <div className="sorter">
                <span>
                  <img src={sortUp} alt="up" />
                </span>
                <span>
                  <img src={sortDown} alt="down" />
                </span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>#01d45d</td>
          <td>Asmita Oli Chhetri</td>
          <td>Active</td>
          <td>asmitaoli20838@gmail.com.com.com</td>
          <td>Dallas, Grand Parie</td>
          <td>Nepal</td>
          <td>2023-05-25</td>
        </tr>
        <tr>
          <td>2</td>
          <td>#01d45d</td>
          <td>Asmita Oli Chhetri</td>
          <td>Active</td>
          <td>asmitaoli20838@gmail.com.com.com</td>
          <td>Dallas, Grand Parie</td>
          <td>Nepal</td>
          <td>2023-05-25</td>
        </tr>
        <tr>
          <td>1</td>
          <td>#01d45d</td>
          <td>Asmita Oli Chhetri</td>
          <td>Active</td>
          <td>asmitaoli20838@gmail.com.com.com</td>
          <td>Dallas, Grand Parie</td>
          <td>Nepal</td>
          <td>2023-05-25</td>
        </tr>
        <tr>
          <td>2</td>
          <td>#01d45d</td>
          <td>Asmita Oli Chhetri</td>
          <td>Active</td>
          <td>asmitaoli20838@gmail.com.com.com</td>
          <td>Dallas, Grand Parie</td>
          <td>Nepal</td>
          <td>2023-05-25</td>
        </tr>
        <tr>
          <td>1</td>
          <td>#01d45d</td>
          <td>Asmita Oli Chhetri</td>
          <td>Active</td>
          <td>asmitaoli20838@gmail.com.com.com</td>
          <td>Dallas, Grand Parie</td>
          <td>Nepal</td>
          <td>2023-05-25</td>
        </tr>
        <tr>
          <td>2</td>
          <td>#01d45d</td>
          <td>Asmita Oli Chhetri</td>
          <td>Active</td>
          <td>asmitaoli20838@gmail.com.com.com</td>
          <td>Dallas, Grand Parie</td>
          <td>Nepal</td>
          <td>2023-05-25</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
