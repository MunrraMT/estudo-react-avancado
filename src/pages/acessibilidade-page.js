import AcessibilidadeArticle from '../components/acessibilidade-article';
import AcessibilidadeAside from '../components/acessibilidade-aside';
import AcessibilidadeForm from '../components/acessibilidade-form';
import AcessibilidadeNav from '../components/acessiblididade-nav';
import Titulo from '../components/titulo';

const AcessibilidadePage = () => (
  <>
    <header>
      <Titulo />
      <AcessibilidadeNav />
    </header>
    <AcessibilidadeArticle />
    <AcessibilidadeForm />
    <AcessibilidadeAside />
  </>
);

export default AcessibilidadePage;
