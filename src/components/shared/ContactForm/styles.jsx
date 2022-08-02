import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    width: 420px;
    height: 560px;
    border-radius: 10px;
    box-shadow:0px 8.848px 8.848px -2.6544px rgba(0, 0, 0, 0.15) ;
    padding: 60px 35px 45px;
    justify-content: space-between;
    `
export const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const ContactTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color:#1A046F;
    `
export const ContactSubtitle = styled.p`
    font-size: 16px;
    color:#5692B9;
    `
export const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    `
export const InputText = styled.input`
    height: 55px;
    border: none;
    width: 340px;
    border-radius: 5px;
    background: #5692B910;
    padding: 16px 6px;
    display: flex;

    &::placeholder{
        color: #1A046F;
        font-size: 14px;
        top: -10px;

    }


`
export const InputArea = styled.textarea`
     height: 130px;
    border: none;
    width: 340px;
    border-radius: 5px;
    background: #5692B910;
    padding: 16px 6px;
    display: flex;
    resize: none;
    &::placeholder{
        color: #1A046F;
        font-size: 14px;
        top: -10px;
    }
`
export const InputButton = styled.button`
    height: 55px;
    border: none;
    width: 340px;
    border-radius: 10px;
    background: #5692B9;
    color: #fff;
    font-size: 18px;
    cursor: pointer;

    &:hover{
        background: #407A9F;
        color: #fff;
    }
`