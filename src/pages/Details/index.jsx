import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import { Container, Content, Section } from "./styles";

import { Header } from "../../components/Header";
import { NavLink } from "../../components/NavLink";
import { Rating } from "../../components/Rating";
import { Movie } from "../../components/Movie";
import { Tag } from "../../components/Tag";

import { FiClock } from 'react-icons/fi';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    };

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <header>
              <NavLink
                title='Voltar'
                onClick={() => navigate(-1)}
              />
            </header>

            <Section>
              <div>
                <h1>
                  {data.title}
                </h1>

                <Rating />
              </div>

              <div>
                <img src="https://github.com/pedromartinelli.png" />
                <span>Por Pedro Martinelli</span>
                <FiClock />
                {/* <span>21/09/22 às 19:22</span> */}
                <span>
                  {data.created_at}
                </span>
              </div>

            </Section>

            {/* <Movie
              data={{
                tags: [
                  { id: '1', name: 'Ficção Científica' },
                  { id: '2', name: 'Drama' },
                  { id: '3', name: 'Família' }
                ]
              }}
            /> */}

            {
              data.tags &&
              <div>
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </div>
            }

            <p>
              {data.description}
            </p>

          </Content>
        </main>
      }
    </Container>
  );
};