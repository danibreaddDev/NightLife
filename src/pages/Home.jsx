import {Hero} from "../components/sections/Hero/Hero.jsx";
import {Clubs} from "../components/sections/Clubs/Clubs.jsx";
import {SongDay} from "../components/Songday.jsx";
export const Home = () => {
    return (
        <div className={"h-screen bg-black flex flex-col p-5 scroll-smooth"}>
            <Hero/>
            <SongDay/>
            <Clubs/>
        </div>
    );
};