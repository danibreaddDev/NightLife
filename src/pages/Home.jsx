import { Hero } from "../components/sections/Hero/Hero.jsx";
import { Clubs } from "../components/sections/Clubs/Clubs.jsx";
import { Events } from "../components/sections/Events/Events.jsx";
import { SongDay } from "../components/SongDay.jsx";
import { useEffect } from "react";
export const Home = () => {
  const clubs = [
    {
      club_name: "Club Deportivo Los Amigos",
      club_address: "Calle Ficticia 123, Ciudad Ejemplo",
      club_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgqLQC2z_ATYcu9A_gA2H5igK5dVldggjpQ&s",
      events: [
        {
          event_name: "Torneo de Fútbol",
          event_description:
            "Un emocionante torneo de fútbol entre equipos locales.",
          event_date: "2025-03-15",
          event_time: "10:00 AM",
        },
        {
          event_name: "Concierto de Jazz",
          event_description:
            "Una noche con las mejores bandas de jazz locales.",
          event_date: "2025-04-10",
          event_time: "8:00 PM",
        },
      ],
    },
    {
      club_name: "Centro Cultural La Estrella",
      club_address: "Avenida Libertad 45, Zona 4",
      club_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjFhos12ZlKwbbqfO-vBvZqjog5hFpWcjNw&s",
      events: [
        {
          event_name: "Exposición de Arte Moderno",
          event_description: "Muestra de obras de artistas contemporáneos.",
          event_date: "2025-02-20",
          event_time: "6:00 PM",
        },
        {
          event_name: "Taller de Pintura",
          event_description:
            "Un taller práctico para aprender técnicas de pintura.",
          event_date: "2025-03-01",
          event_time: "2:00 PM",
        },
      ],
    },
    {
      club_name: "Club Deportivo Los Amigos",
      club_address: "Calle Ficticia 123, Ciudad Ejemplo",
      club_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgqLQC2z_ATYcu9A_gA2H5igK5dVldggjpQ&s",
      events: [
        {
          event_name: "Torneo de Fútbol",
          event_description:
            "Un emocionante torneo de fútbol entre equipos locales.",
          event_date: "2025-03-15",
          event_time: "10:00 AM",
        },
        {
          event_name: "Concierto de Jazz",
          event_description:
            "Una noche con las mejores bandas de jazz locales.",
          event_date: "2025-04-10",
          event_time: "8:00 PM",
        },
      ],
    },
    {
      club_name: "Club Deportivo Los Amigos",
      club_address: "Calle Ficticia 123, Ciudad Ejemplo",
      club_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgqLQC2z_ATYcu9A_gA2H5igK5dVldggjpQ&s",
      events: [
        {
          event_name: "Torneo de Fútbol",
          event_description:
            "Un emocionante torneo de fútbol entre equipos locales.",
          event_date: "2025-03-15",
          event_time: "10:00 AM",
        },
        {
          event_name: "Concierto de Jazz",
          event_description:
            "Una noche con las mejores bandas de jazz locales.",
          event_date: "2025-04-10",
          event_time: "8:00 PM",
        },
      ],
    },
  ];
  const onlyEvents = () => {
    let events = [];
    console.log("eo", clubs);
    clubs.forEach((club) => {
      club.events.forEach((event) => {
        const info = {
          event: event,
          club: club.club_name,
        };
        events.push(info);
      });
    });
    return events;
  };
  return (
    <div className={"min-h-screen bg-black flex flex-col p-5 scroll-smooth"}>
      <Hero />
      <SongDay />
      <Clubs clubs={clubs} />
      <Events events={onlyEvents()} />
    </div>
  );
};
