import { Fragment } from "react";


const Button = ({ onButtonClick, buttonText }) => {
  return (
    <Fragment>
      <button onClick={onButtonClick} >{buttonText}</button>
    </Fragment>
  )
}

export default Button;