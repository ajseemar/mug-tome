import React from 'react';
import { Route } from 'react-router-dom';

import Greeting from './components/greeting';

const App = () => (
    <div id='app-container'>
        <Route path="/" component={ Greeting } />
    </div>
);

export default App;
