import { ContactForm } from "../shared"
import { SocialItem } from "./components/SocialItem"
import { Facebook, Place, Email } from "@mui/icons-material"

import { ContactContainer, ContactInfo, ContactSocial, ContactText, ContactTitle } from "./style"

export const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactInfo>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactText>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
                </ContactText>
                <ContactSocial>
                    <SocialItem icon={Facebook} title="facebook.com/neaa" url="https://www.facebook.com/" />
                    <SocialItem icon={Place} title="123, Puerto Mont, Chile" url="https://www.google.com/maps/@37.6,-95.665,4z" />
                    <SocialItem icon={Email} title="contacto@neaa.cl" url="#contact" />
                </ContactSocial>
            </ContactInfo>
            <ContactForm />
        </ContactContainer>
    )
}
