
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
                        Lorem ipsum dolor sit amet eam quas malorum.
                    </HeroTitle>
                    <HeroSubtitle>
                        Lorem ipsum dolor sit amet eam quas malorum.
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

