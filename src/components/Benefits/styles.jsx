import styled from "styled-components"

export const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-bottom: 150px;
    padding: 0 10vw;
    `
export const BenefitsTitle = styled.h2`
    font-size:32px;
    font-weight: bold;
    text-align: center;
    color:#1A046F;
    width: 600px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        width: 90vw;
    }
    `
export const BenefitsItemContainer = styled.div`
display:grid;
max-width: 1200px;
grid-template-columns: repeat(3,minmax(350px,1fr));
grid-template-rows: repeat(2,1fr);
grid-gap: 30px;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: repeat(6,minmax(350px,1fr)); */
}
`