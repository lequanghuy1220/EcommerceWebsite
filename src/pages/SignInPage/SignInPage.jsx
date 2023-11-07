import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextColor } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import LogoSignIn from '../../assets/Images/LogoSignIn.png'
import { Image } from 'antd'
import { EyeInvisibleFilled,EyeFilled } from '@ant-design/icons';



const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center',background:'rgba(0,0,0,0.53)', height:'100vh'}}>
      <div style={{display:'flex', width: '800px', height:'445px', borderRadius: '6px', background:'#fff'}}>
        <WrapperContainerLeft>
          <h1>Xin Chào,</h1>
          <p>Đăng Nhập vào Tài Khoản</p>
          <InputFormComponent style={{marginBottom:'20px'}} placeholder="abc@gmail.com"/>
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
            <InputFormComponent placeholder="password" type={isShowPassword ? "text" : "password"}/>
          </div>
          <ButtonComponent
              size={40} 
              style={{background:' rgb(255,57,69)', height:'48px', width: '100%', border:'none', borderRadius: '4px', margin:' 26px 0 10px'}} 
              textButton={'Đăng Nhập'}
              styleTextButton={{color: '#fff', fontSize:'15px', fontWeight:'700'}}
          ></ButtonComponent>
          <WrapperTextColor>Quên Mật Khẩu</WrapperTextColor>
          <p>Chưa Có Tài Khoản ? <WrapperTextColor>Tạo Tài Khoản</WrapperTextColor></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src = {LogoSignIn} preview={false} alt="image-logo" width= "203px" height="203px"/>
          <h4>Mua sắm tại "..."</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage