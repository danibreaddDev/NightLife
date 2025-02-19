import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../common/Loading";

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
  return (<div className="p-5 min-h-screen w-full  flex flex-col bg-black text-white">
    <div className="flex gap-5">
    <img src={`/images/${club.club_name}.avif`} alt="" className="rounded-4xl size-36"/>
    <h1 className="self-end">{club.club_name}</h1>
    </div>
   
    </div>);
};
