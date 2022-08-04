import styled from "styled-components";
import HeroBg from "../../assets/img/herobg.png";

export const HeroContainer = styled.div`
margin-top: 60px;
display: flex;
height: 600px;
background: url(${HeroBg}) no-repeat center;
background-size: cover;
padding: 0 10vw;
gap: 30px;
justify-content: space-between;

@media (max-width: 768px) {
    margin-top: 0;
    padding-top: 60px ;
    flex-direction: column;
    align-items: center;
    height: 900px;

}
`;

export const HeroContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

@media (max-width: 768px) {
    align-items: center;
    justify-content: center;
}
`;

export const HeroTitle = styled.h1`
font-size: 2.5rem;
font-weight: bold;
color: #fff;
margin-bottom: 1rem;
max-width: 600px;
font-family: 'Montserrat', sans-serif;

@media (max-width: 768px) {
    text-align: center;
}

`;

export const HeroSubtitle = styled.h2`
font-size: 1rem;
color: #fff;
margin-bottom: 1rem;
max-width: 500px;
font-family: 'Montserrat', sans-serif;
@media (max-width: 768px) {
    text-align: center;
}
`;

export const HeroButton = styled.a`
font-size: 1rem;
color: #fff;
text-decoration: none;
background: #5692B9;
padding: 15px 35px;
border-radius: 10px;
margin-top: 1rem;
max-width: 220px;
white-space: nowrap;
cursor: pointer;
transition: all 0.3s ease-in-out;

    &:hover {
        background: #407A9F;
        color: #fff;
    }
`;

export const ContactContainer = styled.div`
display: flex;
margin-top: 90px;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
`