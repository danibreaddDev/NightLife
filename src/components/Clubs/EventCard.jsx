
import { NavLink } from 'react-router'
export const EventCard = ({event}) => {
  return (
    <NavLink to={`/event/${event.id}`} key={event.id} className="h-auto flex flex-row gap-5 rounded-lg bg-gray-950 hover:bg-gray-600">

                <img src={`/images/${event.event_name}.avif`} alt={event.event_name} className=" w-40 h-full object-cover"/>
                <div className="p-5 flex flex-col gap-5">
                  <div className="flex flex-row gap-5 items-center">
                    <span className="px-3 py-2 bg-blue-500 rounded-4xl font-bold">{event.event_date}</span>
                    <span>{event.event_time}</span>
                  </div>
                  <h2 className="text-3xl">{event.event_name}</h2>
                  <h5>{event.event_description}</h5>
                </div>


              </NavLink>
  )
}
