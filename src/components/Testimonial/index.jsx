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
      <TestimonialTitle>Testimonial</TestimonialTitle>
      <TestimonialText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi eu consectetur consectetur.
      </TestimonialText>
      <TestimonialLogos>
        <img src={logoBootstrap} alt='logo de Bootstrap' />
        <img src={logoGoogle} alt='Logo de Google' />
        <img src={logoSpotify} alt='logo de Spotify' />
      </TestimonialLogos>
      <TestimonialCTA>
        <h3>Lorem ipsum dolor sit amet eam</h3>
        <a href='#contacto'>Comienza hoy</a>
      </TestimonialCTA>
    </TestimonialContainer>
  );
};

