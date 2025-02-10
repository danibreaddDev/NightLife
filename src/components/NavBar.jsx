export const NavBar = () => {
    return (
        <div className={"p-5 text-white bg-[#011313]"}>
            <ul className={"flex gap-20 w-full text-3xl "}>
                <li>
                    <a href="" className={"p-2 border transition-colors duration-200 hover:bg-white hover:text-[#011313]"}>Inicio</a>
                </li>
                <li>
                    <a href="" className={"p-2 border transition-colors duration-200 hover:bg-white hover:text-[#011313]"}>Clubs</a>
                </li>
                <li>
                    <a href="" className={"p-2 border transition-colors duration-200 hover:bg-white hover:text-[#011313]"}>Events</a>
                </li>
            </ul>
        </div>
    );
}