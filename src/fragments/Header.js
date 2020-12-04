import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor, faHome,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavDropdown} from 'react-bootstrap';
import * as account from '../api/account';
import { Redirect } from 'react-router-dom';


export default class Header extends Component {

  state = {
    redirect: false
  }

  onLogOut() {
    try {
      account.logOut();
      this.setState({ redirect: true });
    } catch (error) {
      console.log('[ERROR]', error.message);
    }
  }

  redirectToLoggedOut = () => {
    if(this.state.redirect) {
      return <Redirect to='/' />
    }
    return null;
  }


  render() {
    const userLogged = account.isAuthenticated();
    const navCalc = userLogged
      ?<NavDropdown title="Calculators" id="basic-nav-dropdown" className="active">
        <NavDropdown.Item href="/calc/eggs">ChickenEggs</NavDropdown.Item>
        <NavDropdown.Item href="/calc/broiler">ChickenBroiler</NavDropdown.Item>
      </NavDropdown>
      :'';
    let optionsBar = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link active" id="pills-home-tab" href="/" role="tab"><FontAwesomeIcon icon={faHome} /> Home</a>
        </li>
        <li className="nav-item">
          <NavDropdown title="About" id="basic-nav-dropdown" className="active">
            <NavDropdown.Item href="/about/farm">About Farm Helper</NavDropdown.Item>
            <NavDropdown.Item href="/about/breeds">Breeds</NavDropdown.Item>
            <NavDropdown.Item href="/about">Space Required</NavDropdown.Item>
            <NavDropdown.Item href="/about">Chicken Nutrition</NavDropdown.Item>
          </NavDropdown>
        </li>
        <li>
          {navCalc}
        </li>
      </ul>
    );
    let loginIcon = (userLogged
      ?<a className="nav-link" href="/" onClick={() => this.onLogOut()} id="pills-contact-tab" role="tab"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
      :<a className="nav-link" href="/login" id="pills-contact-tab" role="tab"><FontAwesomeIcon icon={faSignOutAlt} /> Login</a>)
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{}}>
        <a className="navbar-brand" href="/" style={{"marginLeft":"10%"}}>
          <FontAwesomeIcon icon={faTractor} size="2x" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            {optionsBar}
            <span className="navbar-text">
                {loginIcon}
            </span>
        </div>
      </nav>
    );
  }
}