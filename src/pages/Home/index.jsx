import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import { Container, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";
import { ImFilesEmpty } from 'react-icons/im'

export function Home() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleMovieDetails(id) {
    navigate(`/details/${id}`);
  };

  const funciona = () => {
    console.log('Funcionou')
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get('/movies?title');
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  console.log(movies)
  return (
    <Container>
      <Header />

      <main>
        <NewMovie>
          Meus filmes

          <Link to='new'>
            <FiPlus />
            Adicionar filme
          </Link>
        </NewMovie>

        <Content>
          {(movies.length == 0)
            ?
            
            <p><ImFilesEmpty />Nenhum filme adicionado</p>
            :
            movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleMovieDetails(movie.id)}
              />
            ))
          }
        </Content>

      </main>

    </Container >
  );
};