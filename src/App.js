import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom'
import ReactLogo from './img/crown.svg';


class App extends Component {

  render() {
    const divStyle = {
        textAlign: 'center',
        marginBottom: '40px'
    }

    return (
      <div style={divStyle}>
          <header>
          <nav className="nav">
              <img src={ReactLogo} alt=""></img>
              <ul>
                  <li>
                      <NavLink to="/search" className="header-button"><span style={{paddingLeft: "1em"}}>Поиск</span></NavLink>
                  </li>
                  <li>
                      <NavLink to="/video" className="header-button"><span style={{paddingLeft: "1em"}}>Закладки</span></NavLink>
                  </li>
              </ul>
          </nav>
          </header>
          <div >
              <Route path="/search"/>
              <Route path="/video"/>
          </div>
      </div>
    );
  }
}
export default App;
