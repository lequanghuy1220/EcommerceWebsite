import { Col, Row,Image} from 'antd'
import React from 'react'
import ImagesProduct from '../../assets/Images/MainProductDetails.jpg'
import ImagesProductSmall from '../../assets/Images/ProductDetailSmall1.jpg'
import { WrapperAdressProductDetail, WrapperBtnQualityProduct, WrapperQualityProductDetail, WrapperInputNumber, WrapperPriceProductDetail, WrapperPriceTextProductDetail, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import {StarFilled,PlusOutlined,MinusOutlined} from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
//import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailComponent = () => {
  const onChange = () =>{}
  return (
    <Row style={{padding: '16px',display: 'flex', background: '#fff',borderRadius:'4px'}}>
      <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
        <Image src={ImagesProduct} alt="image product" preview={false}/>
        <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}>
          <WrapperStyleColImage span={4} >
            <WrapperStyleImageSmall src={ImagesProductSmall} alt="image small" preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={ImagesProductSmall} alt="image small" preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={ImagesProductSmall} alt="image small" preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={ImagesProductSmall} alt="image small" preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={ImagesProductSmall} alt="image small" preview={false}/>
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={ImagesProductSmall} alt="image small" preview={false}/>
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft: '10px'}}>
        <WrapperStyleNameProduct>Điện Thoại Samsung Galaxy Z Flip5 5G - Hàng Chính Hãng - Đã kích hoạt bảo hành điện tử</WrapperStyleNameProduct>
        <div style={{padding:"10px"}}>

          <StarFilled style={{fontSize: '12px', color: 'rgb(253,216,54)'}}/>
          <StarFilled style={{fontSize: '12px', color: 'rgb(253,216,54)'}}/>
          <StarFilled style={{fontSize: '12px', color: 'rgb(253,216,54)'}}/>
          <WrapperStyleTextSell>| Da ban 100+</WrapperStyleTextSell>

        </div>

        <WrapperPriceProductDetail>
          <WrapperPriceTextProductDetail>200.000</WrapperPriceTextProductDetail>
        </WrapperPriceProductDetail>
        <WrapperAdressProductDetail>
          <span style={{padding:'10px'}}>Giao den</span>
          <span className='address'  > Q. 1, P. Bến Nghé, Hồ Chí Minh</span> - 
          <span className='ChangeAddress'>Doi Dia Chi</span>
        </WrapperAdressProductDetail>
        <div style={{margin:'10px 0 20px',padding:'10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #ccc'}}>
            <div style={{marginLeft: '10px', marginBottom:'10px'}}>So Luong</div>
            <WrapperQualityProductDetail>
              <button style={{border:'none', background: 'transparent'}}>
                <MinusOutlined style={{color:'#000', fontSize: '20px'}}/>
              </button>
                <WrapperInputNumber  defaultValue={3} onChange={onChange} size='small' />
              <button style={{border:'none', background: 'transparent'}}>
                <PlusOutlined style={{color:'#000', fontSize: '20px'}}/>
              </button>
            </WrapperQualityProductDetail>
        </div>
        <div style={{display: 'flex', alignItems:'center', gap:'12px',marginLeft: '10px'}}>
          <ButtonComponent 
            size={40} 
            style={{background:' rgb(255,57,69)', height:'48px', width: '220px', border:'none', borderRadius: '4px'}} 
            textButton={'chọn mua'}
            styleTextButton={{color: '#fff', fontSize:'15px', fontWeight:'700'}}
          ></ButtonComponent>
          <ButtonComponent 
            size={40} 
            style={{
              background:' #fff', 
              height:'48px', 
              width: '220px', 
              borderRadius: '4px',
              border:'1px solid rgb(13,92,182)'
            }} 
            textButton={'mua trả sau'}
            styleTextButton={{color: 'rgb(13,92,182)', fontSize:'15px'}}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  )
}

export default ProductDetailComponent