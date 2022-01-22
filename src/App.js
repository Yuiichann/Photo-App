import Home from 'components/Home';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './app.scss';
import Delay from './components/Delay';
import Header from './components/Header';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
        <BrowserRouter>
          
          <Header />
          <Suspense fallback={<Delay />}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/photos" component={Photo} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
