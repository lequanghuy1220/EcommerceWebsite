import React, { Fragment } from 'react'
//
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import HomePage from './pages/HomePage/HomePage'
//import OrderPage from './pages/OrderPage/OrderPage'
//import ProductsPage from './pages/ProductsPage/ProductsPage'
//import routes từ folder routes để khi tạo ra các trang mới không cần phải thêm các Route nữa
import {routes} from './routes'
//import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {
  

  return (
    <div>
      
        <Router>
          <Routes>
              {routes.map((route) =>{
                const Page = route.page
                const Layout = route.isShowHeader ? DefaultComponent : Fragment
                return(
                  <Route key ={route.path} path={route.path} element={
                    <Layout>
                      <Page/>
                    </Layout>
                  } />
                )
              })}
          </Routes>
        </Router>
    </div>
  )
}
export default App