import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputFormComponent = (props) => {
    const {valueInput, setValueInput} = useState('')
    const { placeholder = 'nhập text', ...rests }   = props
  return (
    <>
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} style/>
    </>
  )
}

export default InputFormComponent