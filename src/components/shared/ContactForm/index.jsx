import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
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

    const { register, handleSubmit, errors, reset } = useForm()

    const onSubmit = data => {
        emailjs.send('service_pabz39i', 'template_7z3853g', data, '6A7puWAZzRlHTWFH8')
            .then(res => {
                console.log('Email successfully sent!')
            }).catch(err => {
                console.log('Email failed to send!')
            }
            )
        reset({
            from_name: "",
            from_email: "",
            message: ""

        })

    }
    console.log(errors);
    return (
        <ContactContainer>
            <ContactHeader>
                <ContactTitle>Escribenos y conversemos.</ContactTitle>
                <ContactSubtitle>
                    Podemos optimizar tus procesos de fondeo y de ejecución de tus proyectos.
                </ContactSubtitle>
            </ContactHeader>
            <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
                <InputText type="text" placeholder="Ingresa tu nombre" {...register("from_name", { required: true, min: 4, pattern: /[a-zA-Z ]{2,254}/i })} />
                <InputText type="email" placeholder="Ingresa tu correo" {...register("from_email", { required: true, pattern: /^\S+@\S+$/i })} />
                <InputArea type="area" placeholder="Ingresa tu mensaje" {...register("message", { required: true })} />
                <InputButton type="submit" >Enviar</InputButton>
            </ContactFormContainer>

        </ContactContainer>
    )
}

export default ContactForm