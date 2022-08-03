import styled from "styled-components";

export const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10vw;
    margin-bottom: 150px;
    `
export const TestimonialTitle = styled.h2`
font-size: 32px;
font-weight: bold;
color: #1A046F;
text-align: center;
margin-bottom:20px;
`
export const TestimonialText = styled.p`
font-size: 16px;
color:#5692B9 ;
width: 600px;
text-align: center;
margin-bottom:80px;

@media (max-width: 768px) {
    width: 95vw;
    margin: 20px 2.5vw 80px;

}


`
export const TestimonialLogos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap:70px;
margin-bottom: 80px;

@media (max-width: 768px) {
    flex-direction: column;
    gap:40px;
    margin-bottom: 80px;
}

img{
    height: 40px;
}
`
export const TestimonialCTA = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap:70px;
background: #5692B9;
border-radius: 10px;
height: 100px;
width: 80vw;
color: #fff;
box-shadow: 0px 8.848px 8.848px -2.6544px rgba(0, 0, 0, 0.15);


@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: auto;
    margin: 0 2.5vw;
    padding: 10px 20px;
    gap: 20px;
}


h3{
    font-size: 36px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
}
a{
    text-decoration: none;
    color: #5692B9;
    background: #fff;
    border-radius: 10px;
    padding: 15px 45px;
    cursor: pointer;
    font-size: 16px;
}

a:hover{
    background: #1A046F;
    color: #fff;
}
;
`

