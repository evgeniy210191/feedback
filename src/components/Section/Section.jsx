import PropTypes from 'prop-types';
import { Title, Container } from './Section.styled';
function Section({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
