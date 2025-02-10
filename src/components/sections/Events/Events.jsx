import React from "react";

export const Events = ({ events }) => {
  console.log("eventos en el componente", events);

  return (
    <div className={"mt-12 p-5 flex flex-col text-white"}>
      <h2 className={"text-7xl font-extrabold"}>Next Events</h2>
      <div className={"p-5 w-full grid grid-cols-4 gap-10"}>
        {
            events.map((event,index)=>(
                <div key={index} className={"border-2 p-5 flex flex-col"}>
                    <img src="" alt=""/>
                    <div className="flex gap-2">
                        <h3>{event.event.event_name}</h3>
                        <p>{event.event.event_date}</p>
                        <p className={"font-bold"}>{event.event.event_time}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};
