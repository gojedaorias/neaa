import React from 'react'
import { FooterContainer, FooterLink } from './style'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLink>
                <a href="/">
                    Inicio
                </a>
                <a href="#nosotros">
                    Sobre nosotros
                </a>
                <a href="#services">
                    Servicios
                </a>
                <a href="#contact">
                    Contacto
                </a>
            </FooterLink>
        </FooterContainer>
    )
}
