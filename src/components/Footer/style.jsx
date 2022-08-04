import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1A046F;
    height: 220px;
    width: 100vw;

    @media (max-width: 768px) {
        height: auto;
        padding: 20px 0;
    }
    `
export const FooterLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 25px 0;
    }
    a{
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        padding-bottom: 5px;
        
        &:hover{
            border-bottom: 1px solid #fff;
        }
    }
    `
export const FooterText = styled.p`
    font-size: 10px;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    `