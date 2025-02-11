import axios from "axios";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
export const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/clubs/").then((response) => {
      setClubs(response.data);
    });
  }, []);
  if (!clubs) return null;
  return (
    <div className="p-5 w-full grid grid-cols-4 gap-10 ">
      {clubs.map((club, index) => (
        <NavLink
          to={"/club/:name}"}
          key={index}
          className={
            " cursor-crosshair h-full border-2 border-slate-500 flex flex-col gap-3 transition-all hover:border-slate-100"
          }
        >
          <img
            src={`/images/${club.club_name}.avif`}
            alt={club.club_name}
            className=""
          />

          <div className="p-5 flex flex-col gap-3">
            <p>{club.club_name}</p>
            <p>{club.club_address}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
