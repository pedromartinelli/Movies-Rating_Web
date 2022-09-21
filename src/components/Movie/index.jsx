import { Container } from "./styles";

import { Tag } from '../Tag'; 
import { Rating } from '../Rating'; 

export function Movie({ data, ...rest }) {
  return(
    <Container>
      <h1> {data.title} </h1>

      <Rating />

      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto aspernatur nemo itaque ipsam dolores, in tempore laborum voluptatum inventore dicta cupiditate similique quia rerum dolore, quaerat quae! Repellendus, consequatur. </p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  ); 
};

