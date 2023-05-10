import React from 'react';
import '../styles/button.css';

const Button = ({btnText, btnType}) => {
  return <button className={btnType}>{btnText}</button>
}

export default Button