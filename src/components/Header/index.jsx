import { Container, HomeNav, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi'

import { Link } from "react-router-dom";

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <HomeNav to='/'>
        <h1>moviesRating</h1>
      </HomeNav>

      <Input
        placeholder='Pesquisar pelo título'
        icon={FiSearch}
        type='text'
      />

      <Profile>
        <div>
          <Link to='/profile'>Pedro Martinelli</Link>
          <Link>sair</Link>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/pedromartinelli.png" alt="" />

        </Link>
      </Profile>
    </Container>
  );
};