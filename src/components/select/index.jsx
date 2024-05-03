import React, { useEffect, useState } from "react";

export const Dropdown = ({ dropdownOption, handleOption }) => {
  console.log(dropdownOption);
  const handleClick = (e) => {
    handleOption(e.target.value);
  };

  return (
    <select onChange={handleClick}>
      {dropdownOption.map((val) => (
        <option value={val}>{val}</option>
      ))}
    </select>
  );
};
