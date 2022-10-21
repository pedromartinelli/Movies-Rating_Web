import { Container } from "./styles";

import { Tag } from '../Tag';
import { Rating } from '../Rating';

export function Movie({ data, ...rest }) {

  function addRatingCheckedClass(value) {
    let checkedClass;
    if (value <= data.rating - 1) {
      checkedClass = checkedClass + " checked";
    }

    return checkedClass;
  }

  return (
    <Container {...rest}>
      <h1> {data.title} </h1>

      <div>
        {
          [...Array(5).keys()].map((x, index) => {
            return <Rating key={index} className={addRatingCheckedClass(x)} />;
          })
        }
      </div>

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

