import { useState, useEffect } from "react";
import axios from "axios";
import { Hero } from "../components/Home/Sections/Hero/Hero.jsx";
import { Clubs } from "../components/Home/Sections/Clubs/Clubs.jsx";
import { Events } from "../components/Home/Sections/Events/Events.jsx";
import { SongDay } from "../components/Home/SongDay.jsx";
import { Loading } from "../components/common/Loading.jsx";

export const HomePage = () => {
  const [clubs, setClubs] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:8000/api/clubs").then((response) => {
        setClubs(response.data.slice(0, 5));
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    try {
      axios.get("http://localhost:8000/api/events").then((response) => {
        setEvents(response.data.slice(0, 10));
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) return <Loading/>;
  return (
    <div className={"min-h-screen bg-black flex flex-col p-5 scroll-smooth"}>
      <Hero />
      <SongDay />
      <Events events={events} />
      <Clubs clubs={clubs} />
    </div>
  );
};
