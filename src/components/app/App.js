import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { getRoutes } from '../../routes';
import 'normalize.css';

export default function App() {
  return (
    <Router>
     <>
     <Switch>
       {getRoutes()}
     </Switch>
     </>
    </Router>
  );
}
