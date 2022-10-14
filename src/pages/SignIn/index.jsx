import { Link } from "react-router-dom";

import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock, FiMinimize } from 'react-icons/fi';
import { RiErrorWarningFill } from 'react-icons/ri';

import backgroundImg from '../../assets/backgroundImg.png';

export function SignIn() {
  const schema = zod.object({
    email: zod.string(),
    password: zod.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const { SignIn } = useAuth();

  function handleSignIn(user) {
    SignIn({ email: user.email, password: user.password });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit((d) => handleSignIn(d))}>
        <h1>moviesRating</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div className='inputContainer'>
          <div className='iconInputContainer'>
            <FiMail />
            <input
              placeholder='E-mail'
              type='text'
              {...register('email')}
            />
          </div>
          {errors.email?.message && <p> <RiErrorWarningFill /> {errors.email?.message}</p>}
        </div>

        <div className='inputContainer'>
          <div className='iconInputContainer'>
            <FiLock />
            <input
              placeholder='Senha'
              type='password'
              {...register('password')}
            />
          </div>
          {errors.password?.message && <p> <RiErrorWarningFill /> {errors.password?.message}</p>}
        </div>

        <Button
          title='Entrar'
          type='submit'
        />

        <Link to='/register'>
          Criar conta
        </Link>

      </Form>

      <img src={backgroundImg} alt="Imagem de fundo: uma sala de cinema com os bancos vermelhos." />
    </Container>
  );
};