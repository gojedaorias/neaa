import { SvgIcon } from '@mui/material'
import React from 'react'
import { ItemContainer, ItemDescription, ItemTitle } from '../style'

export const BenefitsItem = ({ icon, title, description }) => {
    return (
        <ItemContainer>
            <SvgIcon sx={{ color: '#5692B9' }} component={icon} fontSize='large' />
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
        </ItemContainer>
    )
}
