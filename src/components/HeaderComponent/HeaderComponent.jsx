import { Badge, Col } from 'antd'
import React from 'react'
//import Search from 'antd/es/input/Search'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

import {WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';



const HeaderComponent = () => {
  return (
    <div style={{width:'100%', background:'rgb(26,148,255)', display:'flex', justifyContent:'center'}}>
        <WrapperHeader>
            <Col span={5}> 
                <WrapperTextHeader>LeQuangHuy</WrapperTextHeader>
            </Col>
            <Col span={13}> 
                
                <ButtonInputSearch
                    size ="large"
                    textButton="Search"
                    placeholder="input search text"
                    bordered = {false}
                    
                    //enterButton
                    //onSearch={onSearch}
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}} />
                    <div>
                        <WrapperTextHeaderSmall>Đăng Nhập/ Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined/>
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <Badge count={4} size='small'>
                        <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
        </WrapperHeader>

    </div>
  )
}

export default HeaderComponent