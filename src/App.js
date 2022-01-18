import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './app.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Delay from './components/Delay';

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
        <BrowserRouter>
          
          <Header />
          <Suspense fallback={<Delay />}>
          
            <Switch>
              <Redirect exact from="/" to="/photos" />
              <Route path="/photos" component={Photo} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
