import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './molecules/header';
import Footer from './molecules/footer';
import Home from './pages/home';
import Directions from './pages/directions';
import Contacts from './pages/contacts';
import Body from './atoms/layout/body';
import Main from './atoms/layout/main';
import Row from './atoms/layout/row';
import Paralax from './atoms/paralax';

const history = createMemoryHistory();

function App() {
  return (
    <Body>
      <Router history={history} >
        <Header />
        <Main>
          <Row>
            <Switch>
              <Route path="/directions">
                <Directions />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Row>
        </Main>
      </Router>
      <Paralax />
      <Footer />
    </Body>
  );
}

export default App;
