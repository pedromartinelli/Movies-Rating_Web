import { Container } from "./styles";

import { FiStar } from 'react-icons/fi'

export function Rating({ className }) {
  return (
    <Container>
      <FiStar className={className}/>
    </Container>
  );

};