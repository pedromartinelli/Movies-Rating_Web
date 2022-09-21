import { Container, HomeNav, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi'

import { Link } from "react-router-dom";

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <HomeNav to='/home'>
        <h1>moviesRating</h1>
      </HomeNav>

      <Input
        placeholder='Pesquisar pelo título'
        icon={FiSearch}
        type='text'
      />

      <Profile>
        <div>
          <strong>Pedro Martinelli</strong>
          <span>sair</span>
        </div>
        
        <img src="https://github.com/pedromartinelli.png" alt="" />
      </Profile>
    </Container>
  );
};