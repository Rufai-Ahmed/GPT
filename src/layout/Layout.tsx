import { Outlet } from "react-router";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div className="flex overflow-hidden">
      <Sider />
      <Outlet />
    </div>
  );
};

export default Layout;
