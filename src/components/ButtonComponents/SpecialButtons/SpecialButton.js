import React from "react";

const SpecialButton = (props) => {
  return (
    <button
    className="button"
    onClick={
      ()=>
      props.clickHandler(props.buttonName)
    }
    >
    {props.buttonName}</button>
   
  );
};

export default SpecialButton
