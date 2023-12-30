import logo from "../../assets/logo/logo.png";
import Navigation from "./Navigation";

function SideBar() {
  return (
    <aside className="sidebar-container">
      <div className="dashboard-title flex items-center gap-1">
        <img src={logo} alt="logo" />
        <h5 className="text-lg font-bold">Subscription</h5>
      </div>
      <div className="navigation-container">
        <Navigation />
      </div>
    </aside>
  );
}

export default SideBar;
