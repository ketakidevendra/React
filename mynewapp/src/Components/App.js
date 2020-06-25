import React, {Component} from 'react';
import '../App.css';
import About from './About'
import Home from './Home'
import Topics from './Topics'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
class App extends Component
{
  render()
  {
    return(
      <BrowserRouter>
          <div>
              <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>
              </ul>
              <hr/>
              <hr/>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/topics' component={Topics} />
          </div>
      </BrowserRouter>

    )
  }


}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Wlcome Ketaki!</h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
