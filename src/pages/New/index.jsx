import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from '../../services/api';

import { Container, TagsSection, Form } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { NavLink } from '../../components/NavLink';
import { MovieTag } from '../../components/MovieTag';

import { RiErrorWarningFill } from 'react-icons/ri';

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  const schema = zod.object({
    title: zod.string().min(1, { message: 'Adicione o título do seu filme.' }),
    rating: zod.string().min(1, { message: 'Introduza uma nota para seu filme.' }),
    description: zod.string().min(1, { message: 'Adicione uma descrição para seu filme.' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  });

  function handleAddTag() {
    const repeatedTag = tags.filter(tag => tag === newTag)

    if (repeatedTag.length > 0) {
      return alert('Não é possível marcar tags iguais.');
    };

    if (!newTag) {
      return alert('Não é possível adicionar uma tag vazia.');
    };

    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  async function handleNewMovie(data) {
    
    if (newTag) {
      return alert('Você deixou uma tag em aberto. Clique para adicionar ou apague-a para continuar.');
    };

    if (tags.length === 0) {
      return alert('Adicione uma tag para sua nota.');
    };

    await api.post('/movies', {
      title: data.title,
      rating: data.rating,
      description: data.description,
      tags
    });

    alert('Nota criada com sucesso!');
    navigate(-1)
  };

  return (
    <Container>
      <Header />

      <main>
        <Form onSubmit={handleSubmit((d) => handleNewMovie(d))}>

          <header>
            <NavLink title='Voltar' to='/' />
            <h1>Novo Filme</h1>
          </header>

          <div className='Inputs'>
            <div className='inputContainer'>
              <div>
                <input
                  placeholder='Título'
                  type='text'
                  {...register('title')}
                />
              </div>
              {errors.title?.message && <p> <RiErrorWarningFill /> {errors.title?.message}</p>}
            </div>

            <div className='inputContainer'>
              <div>
                <input
                  placeholder='Sua nota (de 0 a 5)'
                  type='number'
                  min={0}
                  max={5}
                  {...register('rating')}
                />
              </div>
              {errors.rating?.message && <p> <RiErrorWarningFill /> {errors.rating?.message}</p>}
            </div>
          </div>

          <div className='inputContainer'>
            <textarea
              placeholder='Observações'
              type='text'
              {...register('description')}
            />
            {errors.description?.message && <p> <RiErrorWarningFill /> {errors.description?.message}</p>}
          </div>

          <p>Marcadores</p>

          <div className='tags'>
            {
              tags.map((tag, index) => (
                <MovieTag
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <MovieTag
              isNew
              placeholder='Nova Tag'
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className='Buttons'>
            <Button
              title='Excluir filme'
            />

            <Button
              title='Salvar alterações'
              type='submit'
            />
          </div>

        </Form>
      </main>
    </Container >

  );
};