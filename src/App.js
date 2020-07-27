import React from 'react';
import Header from './components/Header'
import VideoContainer from './components/VideoContainer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Company from './components/Company'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Products from './components/Products';

function App() {
  return (
      <div className='main'>
        <Header />
          <Switch>
            <Route exact path='/' component={VideoContainer} />
            <Route path='/nosotros' component={Company} />
            <Route path='/productos' component={Products} />
            <Route path='/contacto' component={Contact} />
          </Switch>
        <Footer />
      </div>
    );
}

export default App;
