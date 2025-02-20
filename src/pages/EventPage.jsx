
import { Event } from "../components/Events/Event";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../components/common/Loading";

export const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      axios.get(` http://localhost:8000/api/events/${id}`).then((response) => {
        setEvent(response.data);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },[id]);
  if (loading) return <Loading />;
  if (!event) return <div>Event not found</div>;
  return <Event event={event}/>;
};
