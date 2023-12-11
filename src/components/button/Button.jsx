import { Fragment } from "react";
import './button.scss'


const Button = ({ onButtonClick, buttonText }) => {
  return (
    <Fragment>
      <button className="buttonContainer" onClick={onButtonClick} >{buttonText}</button>
    </Fragment>
  )
}

export default Button;