import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Album from './components/Album';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-default">
            <Link to='/'><img src="/assets/images/bloc_jams_logo.png" alt="Bloc logo" /></Link>
            <Link to='/library' id="library-link">Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
