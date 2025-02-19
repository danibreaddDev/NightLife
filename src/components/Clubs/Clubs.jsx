import axios from "axios";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Loading } from "../common/Loading";
export const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      axios.get("http://localhost:8000/api/clubs/").then((response) => {
        setClubs(response.data);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) return <Loading />;
  if (!clubs) return <div>error</div>;
  return (
    <div className="p-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {clubs.map((club, index) => (
        <NavLink
          to={`/clubs/${club.id}`}
          key={index}
          className={
            " cursor-crosshair overflow-hidden h-full border-2 border-gray-500 flex flex-col gap-3 transition-all hover:border-slate-100"
          }
        >
          <img
            src={`/images/${club.club_name}.avif`}
            alt={club.club_name}
            className="w-full h-72 object-cover"
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
