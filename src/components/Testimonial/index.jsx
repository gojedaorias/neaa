import {
  TestimonialContainer,
  TestimonialCTA,
  TestimonialLogos,
  TestimonialText,
  TestimonialTitle,
} from './style';
import logoBootstrap from '../../assets/logos/Bootstrap.svg';
import logoGoogle from '../../assets/logos/google.png';
import logoSpotify from '../../assets/logos/spotify.png';

export const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialTitle>Ellos ya han confiado en nosotros</TestimonialTitle>
      <TestimonialText>
        Nos esmeramos en ofrecer soluciones para darle valor a tus procesos de producción y logramos que tus proyectos sean más eficaces y económicos.
      </TestimonialText>
      <TestimonialLogos>
        <img src={logoBootstrap} alt='logo de Bootstrap' />
        <img src={logoGoogle} alt='Logo de Google' />
        <img src={logoSpotify} alt='logo de Spotify' />
      </TestimonialLogos>
      <TestimonialCTA>
        <h3>¿Quieres reducir los riesgos en tu proceso de ...?</h3>
        <a href='#contacto'>Comienza hoy</a>
      </TestimonialCTA>
    </TestimonialContainer>
  );
};

