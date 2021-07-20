import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AcessibilidadePage from './pages/acessibilidade-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={AcessibilidadePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
