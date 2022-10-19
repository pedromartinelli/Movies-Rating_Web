import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import { Container, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

export function Home() {
  const [movies, setMovies] = useState([]);

  // function handleMovieDetails(id) {
  //   navigate(`/details/${id}`)
  // };

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get('/movies?title');
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

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
          {
            movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie}
              // onClick={() => handleMovieDetails(movie.id)}
              />
            ))
          }
        </Content>
      </main>

    </Container>
  );
};