import styled from "styled-components"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    `
export const AboutTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #1A046F;
    margin-bottom: 15px;
`
export const AboutText = styled.p`
    font-size: 18px;
    color: #1A046F;
    width: 600px;
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: 768px) {
        width: 90vw;
    }
`
export const AboutProfileContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: center;
    gap:80px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    `
export const AboutProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    `
export const AboutProfileImage = styled.img`
    width: 325px;
    border-radius:10px;
    margin-bottom: 20px;
    `
export const AboutProfileName = styled.h3`
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    color: #1A046F;
    `
export const AboutProfileTitle = styled.h4`
    font-size: 14px;
    color:#5692B9;
    text-align: center;
    margin-bottom: 20px;
    `
export const AboutProfileDescription = styled.p`
    font-size: 14px;
    color: #1A046F;
    text-align: center;
    `