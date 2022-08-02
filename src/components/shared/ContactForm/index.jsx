import {
    ContactContainer,
    ContactTitle,
    ContactSubtitle,
    ContactHeader,
    ContactFormContainer,
    InputText,
    InputArea,
    InputButton
} from "./styles"

const ContactForm = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                <ContactTitle>Contact</ContactTitle>
                <ContactSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ContactSubtitle>
            </ContactHeader>
            <ContactFormContainer>
                <InputText type="text" placeholder="Ingresa tu nombre" required />
                <InputText type="text" placeholder="Ingresa tu correo" required />
                <InputArea type="area" placeholder="Ingresa tu mensaje" required />
                <InputButton type="submit" >Enviar</InputButton>
            </ContactFormContainer>

        </ContactContainer>
    )
}

export default ContactForm