import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextColor } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import LogoSignIn from '../../assets/Images/LogoSignIn.png'
import { EyeInvisibleFilled,EyeFilled } from '@ant-design/icons';
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center',background:'rgba(0,0,0,0.53)', height:'100vh'}}>
      <div style={{display:'flex', width: '800px', height:'445px', borderRadius: '6px', background:'#fff'}}>
        <WrapperContainerLeft>
          <h1>Xin Chào,</h1>
          <p>Đăng Nhập vào Tài Khoản</p>
          <InputFormComponent placeholder="abc@gmail.com"/>
          <div style={{position: 'relative'}}>
            <span style={{
              zIndex:10,
              position:'absolute',
              right:'8px',
              top:'4px'
              }}
            >{
              isShowPassword ?(
                <EyeFilled/>
              ) :(
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputFormComponent placeholder="password" type={{marginBottom: '10px'}}/>
          </div>
          <div style={{position: 'relative'}}>
            <span style={{
              zIndex:10,
              position:'absolute',
              right:'8px',
              top:'4px'
              }}
            >{
              isShowPassword ?(
                <EyeFilled/>
              ) :(
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputFormComponent placeholder="Confirm password" type={isShowConfirmPassword ? "text" : "Confirm password"}/>
          </div>
          <ButtonComponent
              size={40} 
              style={{background:' rgb(255,57,69)', height:'48px', width: '100%', border:'none', borderRadius: '4px', margin:' 26px 0 10px'}} 
              textButton={'Đăng Nhập'}
              styleTextButton={{color: '#fff', fontSize:'15px', fontWeight:'700'}}
          ></ButtonComponent>
          <p>Bạn Đã Có Tài Khoản ? <WrapperTextColor>Đăng Ký</WrapperTextColor></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src = {LogoSignIn} preview={false} alt="image-logo" width= "203px" height="203px"/>
          <h4>Mua sắm tại "..."</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage