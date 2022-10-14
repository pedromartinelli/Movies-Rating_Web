import { useNavigate } from 'react-router-dom';

import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../../services/api';

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { RiErrorWarningFill } from 'react-icons/ri';
import backgroundImg from '../../assets/backgroundImg.png';

export function SignUp() {
  const navigate = useNavigate();

  const schema = zod.object({
    name: zod.string().min(1, { message: 'Introduza um nome.' }),
    email: zod.string().email({ message: 'Introduza um endereço de email válido.' }),
    password: zod.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  function handleSignUp(user) {

    api.post('/users', { name: user.name, email: user.email, password: user.password })
      .then(() => {
        alert('Cadastro realizado com sucesso');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível realizar o cadastro');
        };
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit((d) => handleSignUp(d))}>
        <h1>moviesRating</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div className='inputContainer'>
          <div className='iconInputContainer'>
            <FiUser />
            <input
              placeholder='Nome'
              type='text'
              {...register('name')}
            />
          </div>
          {errors.name?.message && <p> <RiErrorWarningFill /> {errors.name?.message}</p>}
        </div>

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
          title='Cadastrar'
          type='submit'
        />

        <NavLink title='Voltar para o login' to='/' />

      </Form>

      <img src={backgroundImg} alt="Imagem de fundo: uma sala de cinema com os bancos vermelhos." />
    </Container>
  );
};