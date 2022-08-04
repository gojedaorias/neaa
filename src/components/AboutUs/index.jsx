import { AboutContainer, AboutProfile, AboutProfileContainer, AboutProfileImage, AboutProfileName, AboutProfileTitle, AboutText, AboutTitle } from "./style"
import profile1 from "../../assets/img/profile1.png"

export const AboutUs = () => {
    return (
        <AboutContainer id="nosotros">
            <AboutTitle>About Us</AboutTitle>
            <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AboutText>
            <AboutProfileContainer>
                <AboutProfile>
                    <AboutProfileImage src={profile1} alt="profile1" />
                    <AboutProfileName>
                        Juan Carlos Ordoñez
                    </AboutProfileName>
                    <AboutProfileTitle>
                        Ingeniero naval
                    </AboutProfileTitle>
                </AboutProfile>
                <AboutProfile>
                    <AboutProfileImage src={profile1} alt="profile1" />
                    <AboutProfileName>
                        Javier Castevelli
                    </AboutProfileName>
                    <AboutProfileTitle>
                        Ingeniero naval
                    </AboutProfileTitle>
                </AboutProfile>
            </AboutProfileContainer>
        </AboutContainer>
    )
}
