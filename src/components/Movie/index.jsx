import { useState } from "react";
import { Container } from "./styles";

import { Tag } from '../Tag';
import { Rating } from '../Rating';

export function Movie({ data, ...rest }) {
  const [rating, setRating] = useState(3);

  function getRatingClasses(value) {
    let classes = "fa fa-star";
    if (value <= rating) {
      classes = classes + " checked";
    }

    return classes;
  }

  return (
    <Container>
      <h1> {data.title} </h1>

      <div className='App'>
        {[...Array(5).keys()].map((x) => {
          <span class={getRatingClasses(x)}></span>;
        })}
      </div>

      <Rating />

      <p> {data.description} </p>
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

