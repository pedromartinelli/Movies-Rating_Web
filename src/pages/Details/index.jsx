import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container, Content, Section } from "./styles";

import { Header } from "../../components/Header";
import { NavLink } from "../../components/NavLink";
import { Rating } from "../../components/Rating";
import { Movie } from "../../components/Movie";
import { Tag } from "../../components/Tag";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { FiClock } from 'react-icons/fi';
import MoonLoader from "react-spinners/MoonLoader";

export function Details() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function addRatingCheckedClass(value) {
    let checkedClass;
    if (value <= data.rating - 1) {
      checkedClass = checkedClass + " checked";
    }

    return checkedClass;
  }

  async function handleDeleteMovie() {
    const confirm = window.confirm('Deseja realmente remover o filme?');

    if (confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-1);
    }
  };

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 1000);
  }, []);

  return (
    <Container>
      <Header />

      {
        loading
        ?
        <MoonLoader className='loader' color="#FF859B" margin={8} />
        :
        data &&
        <main>
          <Content>
            <header>
              <NavLink
                title='Voltar'
                onClick={() => navigate(-1)}
              />

              <button
                onClick={() => handleDeleteMovie()}
              >Excluir Filme</button>
            </header>

            <Section>
              <div>
                <h1>
                  {data.title}
                </h1>

                <div>
                  {
                    [...Array(5).keys()].map((x, index) => {
                      return <Rating key={index} className={addRatingCheckedClass(x)} />;
                    })
                  }
                </div>
              </div>

              <div>
                <img src={avatarUrl} />
                <span>{user.name}</span>
                <FiClock />
                <span>
                  {data.created_at}
                </span>
              </div>

            </Section>

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