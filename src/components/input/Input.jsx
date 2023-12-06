import React from 'react';
import './input.scss'



const Input = ({ label, value, onChange, type, onButtonClick, eyeIcon, logoIcon}) => {

  const changeHandler = (e) =>{
    onChange?.(e.target.value)
  }

  return (
    <div className="input-container">
      <img src={logoIcon} alt="logoIcon" className="logoIcon" />
      <input type={type} value={value} onChange={changeHandler}  placeholder={label} className='inputField' />

      {eyeIcon && (
        <button onClick={onButtonClick} className="search-button">
          <img src={eyeIcon} alt="eyeIcon" />
        </button>
      )}
        
    </div>
  );
};

export default Input;