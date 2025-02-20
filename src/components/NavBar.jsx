import { NavLink } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./Auth/Login";
import { Logout } from "./Auth/Logout";
export const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div
      className={
        "p-5 text-white bg-[#011313] flex justify-between items-center text-3xl"
      }
    >
      <ul className={"flex gap-20"}>
        <NavLink
          to={"/"}
          className={
            "p-2 border transition-colors duration-200 hover:bg-white hover:text-[#011313]"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to={"/clubs"}
          className={
            "p-2 border transition-colors duration-200 hover:bg-white hover:text-[#011313]"
          }
        >
          Clubs
        </NavLink>
        <NavLink
          to={"/events"}
          className={
            "p-2 border transition-colors duration-200 hover:bg-white hover:text-[#011313]"
          }
        >
          Events
        </NavLink>
      </ul>
      {isAuthenticated ? (<div className="flex flex-row gap-5"><Logout /> <NavLink to={"/profile"}>{user.nickname}</NavLink></div>) : <Login />}
    </div>
  );
};
