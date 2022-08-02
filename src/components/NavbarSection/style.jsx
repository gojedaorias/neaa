import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavbarContainer = styled(Navbar)`
    background-color: #5692B9;
    height: 88px;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10vw ;
    z-index: 1;
    box-shadow: 0px 8.848px 8.848px -2.6544px rgba(0, 0, 0, 0.15);
    @media (max-width: 600px) {
        display: none;
    }
    `;
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 90px;

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap:50px;
        li{
            margin: 0;
            padding: 0;
            a{
                color: #fff;
                opacity: 0.9;
                text-decoration: none;
                font-size: 16px;
                border-bottom: 2px solid transparent;
                padding-bottom: 10px;
            }
            a:hover{
                border-bottom: 2px solid #3C64B1;
                opacity: 1;
            }
        }
    }
    `;

export const CTAButton = styled.a`
    background-color: #3C64B1;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 50px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #1A046F;
        color: #fff;
    }

    `