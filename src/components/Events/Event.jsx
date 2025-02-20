import React from "react";
import { useState } from "react";
export const Event = ({ event }) => {
  const addEvent = () => {
    const events = JSON.parse(sessionStorage.getItem("events")) || [];
    if (events.some((ev) => ev.id === event.id)) return;
    events.push(event);
    sessionStorage.setItem("events", JSON.stringify(events));
  alert("added in your Events");
  };
  return (
    <div className="p-5 min-h-screen w-full bg-black text-white flex flex-col items-center">
      <div className=" h-fit w-full lg:w-3xl ">
        <img
          src={`/images/${event.event_name}.avif`}
          alt={event.event_name}
          className="object-cover w-full"
        />
        <div className="mt-12 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-5">
            <h5 className="px-3 py-2 bg-blue-600 rounded-3xl">
              {event.event_date}
            </h5>
            <h6 className="font-bold">
              {" "}
              <span className="font-medium">Starts:</span> {event.event_time}
            </h6>
          </div>
          <h1 className="text-3xl">{event.event_name}</h1>
          <p>{event.event_description}</p>
          <button
            className="px-3 py-2 bg-gray-900 rounded-3xl"
            onClick={() => addEvent()}
          >
            {" "}
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
