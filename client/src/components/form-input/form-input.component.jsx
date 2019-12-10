import React from 'react'

import "./form-input.styles.scss";

const FormInput = ({placeholder}) => {
  return (  
    <input type="text" placeholder={placeholder} />
  )
}

export default FormInput