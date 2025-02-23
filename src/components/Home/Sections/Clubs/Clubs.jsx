import { NavLink } from "react-router";

export const Clubs = ({ clubs }) => {
  return (
    <div className={"mt-12 p-5 flex flex-col text-white"}>
      <h2 className={"text-7xl font-extrabold"}>Our Clubs</h2>
      <div
        className={
          "p-5 w-full grid grid-cols-5 justify-center xl:justify-between items-center gap-5"
        }
      >
        {clubs.map((club, index) => (
          <NavLink
            to={`/clubs/${club.id}`}
            key={index}
            className={
              "cursor-crosshair border-2 border-slate-300 flex flex-col gap-3 transition-all hover:border-slate-100 hover:brightness-200"
            }
          >
            <img
              src={`/images/${club.club_name}.avif`}
              alt={club.club_name}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <p>{club.club_name}</p>
              <p>{club.club_address}</p>
            </div>
          </NavLink>
        ))}
       
      </div>
      <NavLink
          to={"/clubs"}
          className={"p-5 w-fit flex gap-2 justify-center transition-transform hover:scale-110"}
        >
          <h2 className="col-sself-center text-5xl hover:underline decoration-dashed hover:underline-offset-8">
            See More
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
            />
          </svg>
        </NavLink>
    </div>
  );
};
