import { SvgIcon } from '@mui/material';
import {
  CardButton,
  CardContainer,
  CardImage,
  CardInfo,
  CardInfoBottom,
  CardInfoTop,
  ServiceDescription,
  ServiceItem,
  ServiceTitle,
} from './style';

export const ServiceCard = ({
  title = 'Beneficio',
  description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, enim quidem corrupti aspernatur ducimus eum nam in
            debitis et expedita deserunt id rem est omnis voluptate ipsum saepe.
            Suscipit, velit.`,
  image = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  item = 'Servicio',
  icon = '',
  secondary,
}) => {
  return (
    <CardContainer>
      <CardImage secondary={secondary}>
        <img src={image} alt={`Imagen de ${title}`} />
      </CardImage>
      <CardInfo>
        <CardInfoTop>
          <ServiceItem>
            <SvgIcon component={icon} fontSize='large' color='#5692b9' /> {item}
          </ServiceItem>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceDescription>{description}</ServiceDescription>
        </CardInfoTop>
        <CardInfoBottom>
          <CardButton href='#contacto'>Comienza Hoy</CardButton>
        </CardInfoBottom>
      </CardInfo>
    </CardContainer>
  );
};

