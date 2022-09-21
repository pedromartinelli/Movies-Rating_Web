import { Container } from "./styles";

import { FiStar } from 'react-icons/fi'

export function Rating() {
  return (
    <Container>
      <FiStar className="checked"/>
      <FiStar className="checked"/>
      <FiStar className="checked"/>
      <FiStar className="checked"/>
      <FiStar />
    </Container>
  );

};