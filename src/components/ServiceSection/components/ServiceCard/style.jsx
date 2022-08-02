import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    gap:190px;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
    `

export const CardImage = styled.div`
    display: flex;
    order: ${props => props.secondary ? "1" : "0"};

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        order: 0;
        width: 100%;
    }
    `
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
export const CardInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    `
export const CardInfoBottom = styled.div`
    display: flex;
    `
export const ServiceItem = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color:#1A046F;
    margin-bottom: 20px;
    `
export const ServiceTitle = styled.h1`
    font-size: 36px;
    color: #1A046F;
    font-weight: bold;
    margin-bottom: 40px;
    `
export const ServiceDescription = styled.p`
font-size: 20px;
color: #5692b9;
max-width: 600px;
`
export const CardButton = styled.a`
    background: #5692b9;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    padding: 15px 40px;
    max-width: 220px;
    cursor: pointer;

    &:hover {
        background: #1A046F;
        color: #fff;
    }
    `