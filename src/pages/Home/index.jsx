import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import { Container, NewMovie, Content } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { Input } from '../../components/Input';

import { FiSearch } from 'react-icons/fi';
import { FiPlus } from "react-icons/fi";
import { ImFilesEmpty } from 'react-icons/im'
import MoonLoader from "react-spinners/MoonLoader";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleMovieDetails(id) {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    };

    fetchMovies();
  }, [search]);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 1000);
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <NewMovie>
          Meus filmes

          <Input
            placeholder='Pesquisar pelo título'
            icon={FiSearch}
            type='text'
            onChange={(e) => setSearch(e.target.value)}
          />
          
          <Link to='new'>
            <FiPlus />
            Adicionar filme
          </Link>
        </NewMovie>

        <Content>
          {
            loading
              ?
              <MoonLoader className='loader' color="#FF859B" margin={8} />
              :
              (movies.length == 0)
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