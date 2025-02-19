import axios from "axios";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Loading } from "../common/Loading";
export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getEvents = async () => {
      try {
        axios.get("http://localhost:8000/api/events/").then((response) => {
          setEvents(response.data);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getEvents();
  }, []);
  if (loading) return <Loading />;
  if (!events) return <div>Error</div>;
  return (
    <div className="p-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {events.map((event, index) => (
        <NavLink
          to={`/event/${event.id}`}
          key={index}
          className={
            " cursor-crosshair overflow-hidden h-full border-2 border-gray-500 flex flex-col gap-3 transition-all hover:border-slate-100"
          }
        >
          <img
            src={`/images/${event.event_name}.avif`}
            alt={event.event_name}
            className="w-full h-72 object-cover"
          />

          <div className="p-5 flex flex-col gap-3">
            <p>{event.event_description}</p>
            <p>{event.event_date}</p>
            <p>{event.event_time}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
