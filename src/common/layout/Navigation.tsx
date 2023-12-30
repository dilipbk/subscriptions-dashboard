import { NavLink } from "react-router-dom";
import dashboardIcon from "../../assets/icons/dashboard.png";
import usersIcon from "../../assets/icons/man.png";
import subscriptionIcon from "../../assets/icons/subscription-model.png";

function Navigation() {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <img src={dashboardIcon} alt="dashboard icon" />
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <img src={usersIcon} alt="users icon" />
          <NavLink to="users">Users</NavLink>
        </li>
        <li>
          <img src={subscriptionIcon} alt="subscription icon" />
          <NavLink to="subscriptions">Subscriptions</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
