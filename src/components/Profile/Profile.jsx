import React from "react";

export const Profile = ({ user }) => {
  console.log(user);

  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={user.picture}
        alt={user.name}
        className="size-24"
        referrerPolicy="no-referrer"
      />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
