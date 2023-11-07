import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`

    height: 64px;
    width: 64px;

`
export const WrapperStyleColImage = styled(Col)`
    display: flex;
    flex-basic: unset;

`

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36,36,36);
    font-size: 24px;
    font-weight:300;
    line-height:32px;
    word-break: break-word;
    padding: 10px;

`

export const WrapperStyleTextSell = styled.span`
    color: rgb(120,120,120);
    font-size: 15px;
    line-height:24px;

`
export const WrapperPriceProductDetail = styled.div`
    background: rgb(250,250,250);
    border-radius: 4px

`
export const WrapperPriceTextProductDetail = styled.h1`
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    margin-right: 8px;
    padding: 10px;
    margin-top: 10px;

`
export const WrapperQualityProductDetail = styled.div`
    
    display:flex;
    gap: 4px;
    align-items: center;
    border-radius: 4px;
    margin-left: 10px;
    padding: 4px;
    width: 120px;
    border: 1px solid #ccc;
`


export const WrapperAdressProductDetail = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsisl;
        
        
    };
    span.ChangeAddress {
        color: rgb(10, 104, 255);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        flex-shrink: 0;

    }

`
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 60px;
        border-top:none;
        border-bottom: none;
        

    }
    &.ant-input-number-handler-wrap .ant-input-number-handler{
        display: none;
    }

`


