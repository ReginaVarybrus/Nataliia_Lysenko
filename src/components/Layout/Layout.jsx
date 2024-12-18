import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
