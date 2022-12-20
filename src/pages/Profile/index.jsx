import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Form, Avatar } from "./styles";

// import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NavLink } from '../../components/NavLink';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { RiErrorWarningFill } from 'react-icons/ri';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  const schema = zod.object({
    name: zod.string().min(1, { message: 'Introduza um nome.' }),
    email: zod.string().email({ message: 'Introduza um endereço de email válido.' }),
    oldPassword: zod.string().min(1, { message: 'Informe a senha atual.' }),
    newPassword: zod.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: user,
  });

  async function handleUpdate(data) {

    const updated = {
      name: data.name,
      email: data.email,
      password: data.newPassword,
      old_password: data.oldPassword
    }

    const userUpdated = Object.assign(user, updated);

    const res = await updateProfile({ user: userUpdated, avatarFile })
        
    if (res) {
      navigate(-1)
    }
  };

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };

  return (
    <Container>
      <header>
        <NavLink title='voltar' to='/' />
      </header>

      <Form onSubmit={handleSubmit((d) => handleUpdate(d))}>
        <Avatar>
          <img
            src={avatar}
            alt="Imagem de perfil do usuário"
          />

          <label htmlFor="avatar">

            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleAvatarChange}
            />

          </label>
        </Avatar>

        <div className='inputContainer'>
          <div className='iconInputContainer'>
            <FiUser />
            <input
              placeholder={user.name}
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
              placeholder={user.email}
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
              placeholder='Senha atual'
              type='password'
              {...register('oldPassword')}
            />
          </div>
          {errors.oldPassword?.message && <p> <RiErrorWarningFill /> {errors.oldPassword?.message}</p>}
        </div>

        <div className='inputContainer'>
          <div className='iconInputContainer'>
            <FiLock />
            <input
              placeholder='Nova senha'
              type='password'
              {...register('newPassword')}
            />
          </div>
          {errors.newPassword?.message && <p> <RiErrorWarningFill /> {errors.newPassword?.message}</p>}
        </div>

        <Button
          title='Salvar'
          type='submit'
        />
      </Form>

    </Container>
  );
};