import { NavLink } from "react-router";


export const EventsUser = () => {
  const userEvents = JSON.parse(sessionStorage.getItem("events"));
  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-7xl">Your Events</h2>
        <div className="self-center grid grid-cols-2 gap-10 w-full lg:w-3xl">
        {
        userEvents.map((ev) =>(
          <NavLink to={`/events/${ev.id}`} key={ev.id} className="bg-gray-900 p-5 rounded-lg shadow-md flex flex-row gap-10 text-white">
            <img src={`/images/${ev.event_name}.avif`} alt={ev.event_name} className="size-24" />
            <div className="flex flex-col gap-5">
            <h3 className="text-lg">{ev.event_name}</h3>
            <p className="text-sm">{ev.event_date} -  {ev.event_time}</p>
            </div>
          
            </NavLink>
        ))
        }
        </div>
    </div>
  )
}
