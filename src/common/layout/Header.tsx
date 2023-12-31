import notificationIcon from "../../assets/icons/notification-bell.png";
import profileIcon from "../../assets/icons/bussiness-man.png";

function Header() {
  return (
    <header className="dashboard-header__container grow flex items-center justify-between">
      <div className="brand">
        <h5 className="text-xl text-soft">Users Subscription Dashboard</h5>
      </div>
      <div className="menus flex items-center gap-1">
        <div className="notification-icon">
          <button>
            <img src={notificationIcon} alt="notification icon" />
          </button>
        </div>
        <div className="profile">
          <button>
            <img src={profileIcon} alt="profile icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
