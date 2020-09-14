import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Header from './molecules/header';
import Home from './pages/home';
import Directions from './pages/directions';
import Body from './atoms/layout/body';
import Main from './atoms/layout/main';
import Row from './atoms/layout/row';
import Flower from './atoms/decor/flower';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Router>
          <>
            <Header />
            <Main>
              <Row>
                <Switch>
                  <Route path="/info">
                    <Directions />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Row>
            </Main>
          </>
        </Router>
      </Body>
      <Flower />
    </ThemeProvider>
  );
}

export default App;
