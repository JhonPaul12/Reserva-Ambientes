import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";

export const RootLayout = () => {
  return (
    <div>
      <SideMenu />
      <Outlet />
    </div>
  );
};
