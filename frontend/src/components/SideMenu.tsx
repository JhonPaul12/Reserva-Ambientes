import { Link } from "react-router-dom";
import { sideMenuOptions } from "../lib";

export const SideMenu = () => {
  return (
    <aside className="sidemenu">
      {/* Logo */}
      <div className="sidemenu__logo">
        <img src="" alt="Logo" className="max-w-[50px]" />
        <div className="leading-[.5]">
          <h1 className="font-bold text-xl">Steel Code</h1>
          <p className="text-sm font-light ">Gestion de Ambientes</p>
        </div>
      </div>
      {/* Opciones */}
      <ul className="space-y-4">
        {sideMenuOptions.map((option) => (
          <li key={option.path}>
            <Link
              to={{ pathname: option.path }}
              className={`sidemenu__link ${
                location.pathname.includes(option.path) &&
                "sidemenu__link--active"
              }`}
            >
              <span>{option.icon}</span>
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
