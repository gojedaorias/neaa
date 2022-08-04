import { AboutContainer, AboutProfile, AboutProfileContainer, AboutProfileDescription, AboutProfileImage, AboutProfileName, AboutProfileTitle, AboutText, AboutTitle } from "./style"
import profile1 from "../../assets/img/profile1.png"

export const AboutUs = () => {
    return (
        <AboutContainer id="nosotros">
            <AboutTitle>Puedes confiar en nuestra experiencia</AboutTitle>
            <AboutText>
                Llevamos más de 15 años en la industria acuícola, y sabemos como facilitarte el trabajo.
            </AboutText>
            <AboutProfileContainer>
                <AboutProfile>
                    <AboutProfileImage src={profile1} alt="profile1" />
                    <AboutProfileName>
                        Juan Carlos Ordoñez Muñoz
                    </AboutProfileName>
                    <AboutProfileTitle>
                        Ingeniero Naval mención de Máquinas Marinas <br />Licenciado en Ciencias de la Ingeniería de la Universidad Austral de Chile
                    </AboutProfileTitle>
                    <AboutProfileDescription>
                        Con más de 15 años de experiencia en la industria acuícola, ha dedicado su carrera profesional al desarrollo y gestión de proyectos de fondeo de gran escala. Se ha especializado académicamente en la gestión de operaciones, el control de calidad y el mantenimiento centrado en la fiabilidad.
                    </AboutProfileDescription>
                </AboutProfile>
                <AboutProfile>
                    <AboutProfileImage src={profile1} alt="profile1" />
                    <AboutProfileName>
                        Francisco Javier Catellví Huerta
                    </AboutProfileName>
                    <AboutProfileTitle>
                        Ingeniero Civil Industrial de la Universidad Central de Chile <br /> Ingeniero Naval Licenciado en Ciencias de la Ingeniería de la Universidad Austral de Chile.
                    </AboutProfileTitle>
                    <AboutProfileDescription>
                        Con más de 15 años de experiencia en la industria acuícola, ha dedicado su carrera profesional a la administración y planificación de proyectos de ingeniería de fondeo con énfasis en el control de gestión de las iniciativas para prever y disminuir riesgos en las operaciones.
                    </AboutProfileDescription>
                </AboutProfile>
            </AboutProfileContainer>
        </AboutContainer>
    )
}
