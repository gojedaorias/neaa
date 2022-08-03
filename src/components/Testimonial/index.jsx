import {
  TestimonialContainer,
  TestimonialCTA,
  TestimonialLogos,
  TestimonialText,
  TestimonialTitle,
} from './style';

export const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialTitle>Testimonial</TestimonialTitle>
      <TestimonialText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, nisi eu consectetur consectetur.
      </TestimonialText>
      <TestimonialLogos>
        <img src='./src/assets/logos/Bootstrap.svg' alt='logo de Bootstrap' />
        <img src='./src/assets/logos/google.png' alt='Logo de Google' />
        <img src='./src/assets/logos/spotify.png' alt='logo de Spotify' />
      </TestimonialLogos>
      <TestimonialCTA>
        <h3>Lorem ipsum dolor sit amet eam</h3>
        <a href='#contacto'>Comienza hoy</a>
      </TestimonialCTA>
    </TestimonialContainer>
  );
};

