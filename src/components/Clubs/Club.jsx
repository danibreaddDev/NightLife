import { NavLink, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../common/Loading";
import { EventCard } from "./EventCard";
import { Location } from "./Location";

export const Club = () => {
  const { id } = useParams();
  console.log("ID recibido:", id);

  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getClub = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/clubs/${id}`);
        console.log("Datos recibidos:", response.data);
        setClub(response.data);
      } catch (err) {
        console.error("Error al obtener el club:", err);
        setError("No se pudo cargar la información del club.");
      } finally {
        setLoading(false);
      }
    };
    getClub();
  }, [id]);

  // Mensaje de carga mientras se obtiene la información
  if (loading) return <Loading/>;

  // Mostrar error si la petición falla
  if (error) return <div>{error}</div>;

  // Si club es null después de cargar, significa que no se encontró
  if (!club) return <div>Club no encontrado</div>;

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
