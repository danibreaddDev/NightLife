export const SongDay = () => {
    return (
        <div className={"mt-12 w-full flex justify-around text-white"}>

            <div className={"py-12 px-6 border border-black rounded-3xl bg-gradient-to-b from-[#0A0A0A] to-[black]"}>

                <div className={"p-5  flex items-center gap-12 justify-between rounded-3xl border "}>
                    <div className={"flex flex-col"}>
                        <h3 className={"text-lg font-bold"}>The Dark Side</h3>
                        <div className={"flex items-center gap-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={"size-5"} viewBox="0 0 24 24">
                                <path fill="#fff"
                                      d="M10 21q-1.65 0-2.825-1.175T6 17t1.175-2.825T10 13q.575 0 1.063.138t.937.412V3h6v4h-4v10q0 1.65-1.175 2.825T10 21"/>
                            </svg>
                            <p>Muse - Simulation Theory</p>
                        </div>
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className={"size-12 transition-all duration-100 hover:scale-125"} viewBox="0 0 24 24">
                            <path fill="#fff"
                                  d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={"py-12 px-6 border rounded-4xl"}>Song of the Day</div>


        </div>
    );
};