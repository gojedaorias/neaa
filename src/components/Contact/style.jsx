import styled from "styled-components"
import contactbg from "../../assets/img/contactbg.png"

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 80px;
    background: url(${contactbg}) no-repeat center center;
    background-size: cover;
    padding: 120px 10vw;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 90px 0;
    }
    `
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 600px;
    `
export const ContactTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    text-align: left;
    margin-bottom: 90px;
    `
export const ContactText = styled.p`
    font-size: 16px;
    color: #fff;
    text-align: left;
    margin-bottom: 80px;
    width: 80%;

    @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 40px;
    }
    `
export const ContactSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:10px;
    `
