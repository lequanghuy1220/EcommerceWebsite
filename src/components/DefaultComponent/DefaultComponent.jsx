//dùng để 
//import { Header } from 'antd/es/layout/layout'
import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <HeaderComponent />
        {children}
    </div>
  )
}

export default DefaultComponent