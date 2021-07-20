import { NavLink } from 'react-router-dom';

const AcessibilidadeNav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to='/artigo'>Artigo</NavLink>
      </li>
      <li>
        <NavLink to='/formulario'>Formulário</NavLink>
      </li>
      <li>
        <NavLink to='/aside'>Aside</NavLink>
      </li>
    </ul>
  </nav>
);

export default AcessibilidadeNav;
