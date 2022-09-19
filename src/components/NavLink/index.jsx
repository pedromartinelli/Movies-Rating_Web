import { Container } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

export function NavLink({ navigate, title, ...rest }) {
  return (
    <Container {...rest}>
      <FiArrowLeft />
      {title}
    </Container>
  );

};