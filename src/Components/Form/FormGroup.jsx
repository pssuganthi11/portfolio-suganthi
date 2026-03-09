import React from 'react'
import FormLabel from './FormLable'
function FormGroup({ label, htmlFor, children }) {
  return (
      <div>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
    </div>
  )
}

export default FormGroup


