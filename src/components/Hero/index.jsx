
import { ContactForm } from "../shared"
import {
    ContactContainer,
    HeroButton,
    HeroContainer,
    HeroContent,
    HeroSubtitle,
    HeroTitle
} from "./style"

export const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroTitle>
                        Nuestra experiencia al servicio de tus peces.
                    </HeroTitle>
                    <HeroSubtitle>
                        Mejorando tus tiempos de ejecucion y optimizando tus recursos.
                    </HeroSubtitle>
                    <HeroButton href="#servicios">
                        Nuestros Servicios
                    </HeroButton>
                </HeroContent>
                <ContactContainer>
                    <ContactForm />
                </ContactContainer>
            </HeroContainer>
        </>
    )
}

