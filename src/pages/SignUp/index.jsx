import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Container, Form } from "./styles";

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

import backgroundImg from '../../assets/backgroundImg.png';

export function SignUp() {

  const required = { required_error: 'Este campo é obrigatório' };

  const schema = zod.object({
    name: zod.string(required).min(1),
    email: zod.string(required).email({ message: 'Endereço de E-mail inválido' }),
    password: zod.string(required).min(8, { message: 'Mínimo 8 caracteres' })
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  function handleForm(value) {
    console.log(value)
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit((d) => handleForm(d))}>
        <h1>moviesRating</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input
            icon={FiUser}
            placeholder='Nome'
            type='text'
            registers={...register('name')}
          />
          {errors.name?.message && <p>Error: {errors.name?.message}</p>}
        </div>


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

        <NavLink title='Voltar para o login' to='/' />

      </Form>

      <img src={backgroundImg} alt="" />
    </Container>
  );
};