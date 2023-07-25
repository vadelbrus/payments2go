import React from "react";

const Input = ({
  width,
  backgroundColor,
  fontSize,
  fontWeight,
  border,
  placeholder,
  inputClasses,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        style={{
          width,
          backgroundColor,
          border,
          fontSize,
          fontWeight,
        }}
        className={inputClasses}
      ></input>
    </>
  );
};

export default Input;
