export const Hero = () => {
    return (
        <div
            className={"relative overflow-hidden rounded-3xl w-full text-white  bg-gradient-to-b from-[#0A0A0A] to-[black]"}>
            <svg className={"absolute z-auto"} xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2400 800">
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
                        <stop stop-color="hsl(180, 2%, 75%)" stop-opacity="1" offset="0%"></stop>
                        <stop stop-color="hsl(180, 90%, 4%)" stop-opacity="1" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke-width="2" stroke="url(#oooscillate-grad)" fill="none" stroke-linecap="round">
                    <path d="M 0 374 Q 600 55 1200 400 Q 1800 745 2400 374"></path>
                    <path d="M 0 352 Q 600 55 1200 400 Q 1800 745 2400 352"></path>
                    <path d="M 0 330 Q 600 55 1200 400 Q 1800 745 2400 330"></path>
                    <path d="M 0 308 Q 600 55 1200 400 Q 1800 745 2400 308"></path>
                    <path d="M 0 286 Q 600 55 1200 400 Q 1800 745 2400 286"></path>
                    <path d="M 0 264 Q 600 55 1200 400 Q 1800 745 2400 264"></path>
                    <path d="M 0 242 Q 600 55 1200 400 Q 1800 745 2400 242"></path>
                    <path d="M 0 220 Q 600 55 1200 400 Q 1800 745 2400 220"></path>
                    <path d="M 0 198 Q 600 55 1200 400 Q 1800 745 2400 198"></path>
                    <path d="M 0 176 Q 600 55 1200 400 Q 1800 745 2400 176"></path>
                    <path d="M 0 154 Q 600 55 1200 400 Q 1800 745 2400 154"></path>
                    <path d="M 0 132 Q 600 55 1200 400 Q 1800 745 2400 132"></path>
                    <path d="M 0 110 Q 600 55 1200 400 Q 1800 745 2400 110"></path>
                    <path d="M 0 88 Q 600 55 1200 400 Q 1800 745 2400 88"></path>
                    <path d="M 0 66 Q 600 55 1200 400 Q 1800 745 2400 66"></path>
                    <path d="M 0 44 Q 600 55 1200 400 Q 1800 745 2400 44"></path>
                </g>
            </svg>
            <div className={"relative w-full grid grid-cols-2"}>
                <img src="/images/HeroPhoto.png" alt="ds" className={"place-self-center"}/>
                <div className={"p-2 flex flex-col justify-center items-center gap-y-10"}>
                    <h1 className={"text-6xl"}> Where bass never sleeps</h1>
                    <button
                        className={"px-5 py-3 bg-[#011313] border flex items-center gap-x-5 transition-all hover:scale-105"}>
                        Discover Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-play">
                            <polygon points="6 3 20 12 6 21 6 3"/>
                        </svg>
                    </button>
                </div>
            </div>


        </div>
    );
};