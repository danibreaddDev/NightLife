
import { EventCard } from "./EventCard";
import { Location } from "./Location";

export const Club = ({club}) => {
  

  // Renderizar la información solo cuando club tenga datos
  return (<div className="p-5 min-h-screen w-full flex flex-col gap-12 items-center bg-black text-white">
    <div className="flex gap-5 justify-center">
    <img src={`/images/${club.club_name}.avif`} alt="" className=" rounded-full border-2 border-white size-36"/>
    <h1 className="self-end">{club.club_name}</h1>
    </div>
    <div className="grid grid-cols-3 w-full lg:w-6xl">
      <div className="col-span-2 flex flex-col gap-12">
        {
          club.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        }
      </div>
      
        <Location address = {club.club_address} />
       

      </div>


  </div>);
};
