import React from "react";
import "./Input.css"

export const Input = ({
  type = "text",
  name = "",
  placeholder = "",
  click,
  change,
  className = "",
  value,
  label = ""
}) => {
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={change}
        onClick={click}
        value={value}
        className={`form-input ${className}`}
      />{" "}
    </div>
  );
};