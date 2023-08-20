import React from "react";

function SelectOne({ value, handleFuction, label, options }) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <select
        value={value}
        onChange={handleFuction}
        name=""
        id=""
        className={`border border-black ${
          label === "Limit" ? "w-full" : "w-60"
        }  p-1 rounded-lg`}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  );
}

export default SelectOne;
