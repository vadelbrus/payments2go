import React from "react";
import classes from "./ShowcaseInput.module.css";

const ShowcaseInput = (props) => {
  return (
    <>
      <input
        placeholder={props.apiLink}
        className={classes["showcase-input"]}
      ></input>
    </>
  );
};

export default ShowcaseInput;
