import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

import { api } from "../../services/api";

import { Container, HomeNav, Profile } from "./styles";
import { Input } from '../Input';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { FiSearch } from 'react-icons/fi';

export function Header() {
  const { SignOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const userStoraged = JSON.parse(localStorage.getItem('@rocketnotes:users'));

  const navigate = useNavigate();

  function handleLogout() {
    SignOut();
    navigate('/');
  }

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
          <Link to='/profile'>{userStoraged.name}</Link>
          <Link onClick={() => handleLogout()}>sair</Link>
        </div>

        <Link to='/profile'>
          <img
            src={avatarUrl}
            alt="Imagem de perfil do usuário."
          />
        </Link>
      </Profile>
    </Container>
  );
};