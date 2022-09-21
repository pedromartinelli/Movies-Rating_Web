import { Container, Form, Avatar } from "./styles";


import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NavLink } from '../../components/NavLink';

import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

export function Profile() {
  return (
    <Container>
      <header>
        <NavLink title='voltar' to='/' />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/pedromartinelli.png" alt="Imagem de perfil do usuário" />

          <label htmlFor="avatar">

            <FiCamera />
            <input id="avatar" type="file" />

          </label>
        </Avatar>

        <Input icon={FiUser} placeholder='Nome' type='text' />
        <Input icon={FiMail} placeholder='E-mail' type='text' />
        <Input icon={FiLock} placeholder='Senha antiga' type='password' />
        <Input icon={FiLock} placeholder='Nova senha' type='password' />

        <Button title='Salvar' />
      </Form>

    </Container>
  );
};