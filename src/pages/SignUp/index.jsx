import { Container, Form } from "./styles";

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

import backgroundImg from '../../assets/backgroundImg.png';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>moviesRating</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          placeholder='Nome'
          type='text'
        />
        
        <Input
          icon={FiMail}
          placeholder='E-mail'
          type='text'
        />

        <Input
          icon={FiLock}
          placeholder='Senha'
          type='password'
        />

        <Button title='Cadastrar' />

        <NavLink title='Voltar para o login' to='/register' />

      </Form>

      <img src={backgroundImg} alt="" />
    </Container>
  );
};