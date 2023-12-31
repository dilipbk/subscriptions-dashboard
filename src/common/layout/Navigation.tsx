import { NavLink } from "react-router-dom";
import dashboardIcon from "../../assets/icons/dashboard.png";
import usersIcon from "../../assets/icons/man.png";
import subscriptionIcon from "../../assets/icons/subscription-model.png";

function Navigation() {
  return (
    <nav className="navigation-menu">
      <ul>
        <li>
          <NavLink to="/">
            <img src={dashboardIcon} alt="dashboard icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="users">
            <img src={usersIcon} alt="users icon" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="subscriptions">
            <img src={subscriptionIcon} alt="subscription icon" />
            Subscriptions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
