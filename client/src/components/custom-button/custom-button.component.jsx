import React from 'react'

import "./custom-button.styles.scss";

const CustomButton = ({text, type}) => {
  return (
  <button type={type}>{text}</button>
  )
}

export default CustomButton; 