import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout() {
  return (
    <div className="wrapper flex">
      <SideBar />
      <section className="main-container grow">
        <Header />
        <main className="main-content__wrapper">
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Layout;
