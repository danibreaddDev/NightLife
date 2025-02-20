import React from "react";
import { NavLink } from "react-router";

export const Events = ({ events }) => {
  console.log("eventos en el componente", events);

  return (
    <div className={"mt-12 p-5 flex flex-col text-white"}>
      <h2 className={"text-7xl font-extrabold"}>Next Events</h2>
      <div className={"p-5 w-full grid grid-cols-5 gap-10 text-white"}>
        {events.map((event, index) => (
          <NavLink to={`/events/${event.id}`} key={index} className={"border-2 space-y-5"}>
            <img
              src={`/images/${event.event_name}.avif`}
              alt={event.event_name}
              className="w-full h-72 object-cover"
            />
            <div className="p-5 flex flex-col gap-5 items-center">
              <h3 className="text-3xl font-bold">{event.event_name}</h3>
              <div className="flex flex-row gap-5">
                <p>{event.event_date}</p>
                <p className={"font-bold"}>{event.event_time}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
