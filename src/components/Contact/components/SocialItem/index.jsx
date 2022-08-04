
import { SvgIcon } from "@mui/material"
import { SocialItemContainer, SocialText } from "./style"


export const SocialItem = ({ icon, title, url }) => {
    return (
        <SocialItemContainer>
            <a href={url} target="_blank">
                <SvgIcon sx={{ color: '#fff' }} component={icon} fontSize='medium' />
                <SocialText>{title}</SocialText>
            </a>
        </SocialItemContainer>
    )
}
