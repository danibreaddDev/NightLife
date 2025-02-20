import { Club } from "../components/Clubs/Club"
import {  useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../components/common/Loading";
export const ClubPage = () => {
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
  return (
    <Club club = {club} />
  )
}
