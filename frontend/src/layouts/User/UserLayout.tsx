import { SideMenu } from "../../components/SideMenu";
import { sideMenuOptions } from "../../lib";

export const UserLayout = () => {
  return (
    <div>
      <SideMenu sideMenuOptions={sideMenuOptions} />
    </div>
  );
};
