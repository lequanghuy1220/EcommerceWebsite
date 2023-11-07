import styled from "styled-components"
import {Card} from 'antd'
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61);
`
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display-items: flex;
    align-items: center;
    margin: 6px 0 0px;

`
export const WrapperPriceText = styled.div`
    font-size: 16px;
    color: rgb(255,66,78);
    font-weight: 500;
    
`

export const WrapperDiscountText = styled.span`
    font-size: 12px;
    color: rgb(255,66,78);
    font-weight: 500;
`
export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img{
        height: 200px;
        width: 200px;
    }

`
// export const WrapperImageStyle = styled(img)`
//     top: -1px;
//     left: -1px;
//     border-top-left-radius: 3px;
//     position: absolute;
//     height: 14px !important;
//     width: 68px !important;

// `
export const WrapperStyleTextSell = styled.span`
    color: rgb(120,120,120);
    font-size: 15px;
    line-height:24px;

`