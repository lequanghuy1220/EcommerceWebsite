import React from 'react'
import {StyleNameProduct, WrapperStyleTextSell} from './style'
import {WrapperReportText} from './style'
import {WrapperPriceText} from './style'
import {WrapperDiscountText} from './style'
import {WrapperCardStyle} from './style'
import {StarFilled} from '@ant-design/icons'


import LogoProduct from '../../assets/Images/LogoProduct.png'
const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{width: '200px' , height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px'}}
        cover={<img alt="example" src="https://salt.tikicdn.com/cache/280x280/ts/product/98/9b/52/89f12609da590e912ba9741bcf186603.jpg" />}
    >
        <img 
            src={LogoProduct} 
            style={{
                width: '68px', height: '14px', position:'absolute', top: -1, left: -2, 
            }}/>
        <StyleNameProduct>IPhone</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight:'4px'}}>
                <span>4.96</span> <StarFilled style={{fontSize: '15px', color: 'yellow'}}/>
            </span>
            <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight: '8px'}}>19.000.000</span>
            
            <WrapperDiscountText>-20%</WrapperDiscountText> 

        </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent