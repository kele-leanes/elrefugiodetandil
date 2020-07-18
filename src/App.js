import React from 'react';
import Header from './components/Header'
import VideoWrapper from './components/VideoContainer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <div className='main-content'>
        <Header />
          <Switch>
            <Route exact path='/' component={VideoWrapper} />
            <Route path='/nosotros'  />
            <Route path='/contacto' component={Contact} />
          </Switch>
        <Footer />
      </div>
    );
}

export default App;
