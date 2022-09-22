import { Container, Form } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import backgroundImg from '../../assets/backgroundImg.png';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>moviesRating</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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

        <Button title='Entrar' />

        <Link to='/register'>
          Criar conta
        </Link>

      </Form>

      <img src={backgroundImg} alt="" />
    </Container>
  );
};