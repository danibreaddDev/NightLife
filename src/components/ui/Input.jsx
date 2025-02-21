import React from "react";

export const Input = ({ type, setInputValue }) => {
  return (
    <input
      type={type}
      className="p-2 border border-gray-500 rounded-2xl"
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
