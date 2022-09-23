import { Container, TagsSection, Form } from './styles';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { NavLink } from '../../components/NavLink';
import { Textarea } from '../../components/Textarea';
import { MovieTag } from '../../components/MovieTag';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>

          <header>
            <NavLink title='Voltar' to='/' />
            <h1>Novo Filme</h1>
          </header>


          <div className='Inputs'>
            <Input placeholder='Título' />
            <Input placeholder='Sua note (de 0 a 5)' />
          </div>

          <Textarea placeholder='Observações' />

          <p>Marcadores</p>

          <div className='tags'>
            <MovieTag value='Drama' />
            <MovieTag value='Policial' />
            <MovieTag isNew placeholder='Novo marcador' />
          </div>

          <div className='Buttons'>
            <Button title='Excluir filme' />
            <Button title='Salvar alterações' />
          </div>

        </Form>
      </main>
    </Container >

  );
};