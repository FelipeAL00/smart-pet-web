import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Import Pages
import Main from './pages/Main';
import Entregador from './pages/Entregador';
import Pacotes from './pages/Pacotes';
import Controle from './pages/Controle';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Entregador" component={Entregador} />
      <Route path="/Pet-Shop" component={Pacotes} />
      <Route path="/Controle" component={Controle} />
    </Switch>
  );
}
