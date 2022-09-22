import { Container, NewMovie, Content } from "./styles";

import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
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
          <Movie data={{
            title: 'Interestellar',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' }
            ]
          }} />

          <Movie data={{
            title: 'Heat ',
            tags: [
              { id: '3', name: 'Ação' },
              { id: '4', name: 'Policial' }
            ]
          }} />
          <Movie data={{
            title: 'Heat ',
            tags: [
              { id: '3', name: 'Ação' },
              { id: '4', name: 'Policial' }
            ]
          }} />
        </Content>
      </main>

    </Container>
  );
};