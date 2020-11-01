import React, { Component } from 'react';
import { Form, Button, Container, Spinner,  Row, Col, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import * as account from '../api/account';


export default class Login extends Component {

  state = {
    username: '',
    password: '',
    redirect: false,
    loading: false,
    showAlert: false,
    variant: 'success',
    message: ''
  };
  componentDidMount() {

  }

  async onSignIn() {
    const { username, password } = this.state;
    try {
      this.setState({ loading: true });
      const userInfo = await account.logIn(username, password);
      console.log('[UserInfo]', userInfo);
      if(userInfo.token) {
        this.setState({ redirect: true, loading: false });
      } else {
        this.setState({ password: '', loading: false, variant: 'warning', message: 'Please Check Login/Password', showAlert: true});
      }
    } catch (error) {
      console.log(error);
      this.setState({ password: '', loading: false, variant: 'danger', message: error.message, showAlert: true});
    }
  }

  redirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return null;
  }

  //User can Login pressing Enter Key instead of click the button
  keyPressed = (event) => {
    if (event.key === "Enter") {
      this.onSignIn()
    }
  }

  render() {
    return (
      <Container>
        {this.redirect()}
    	  <Row>
          <Col>
            <Form>
              {
                this.state.showAlert &&
                <Form.Row>
                  <Alert key="loginAlert" variant={this.state.variant} show={this.state.showAlert} style={{width: '100%'}}>
                    {this.state.message}
                  </Alert>
                </Form.Row>
              }
              <Form.Group controlId="formBasicEmail">
                <h3>Email address</h3>
                <Form.Control type="email" placeholder="Enter email" onKeyPress={this.keyPressed}
                  value={this.state.username} onChange={(evt) => this.setState({"username": evt.target.value})} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <h3>Password</h3>
                <Form.Control type="password" placeholder="Password" onKeyPress={this.keyPressed}
                  value={this.state.password} onChange={(evt) => this.setState({"password": evt.target.value})} />
              </Form.Group>
              <Button variant="primary" className="LoginButton" type="button" style={{ width: '100%', fontWeight: 'bold' }} onClick={() => this.onSignIn()}>
                { this.state.loading ? <Spinner animation='border' /> : 'L O G I N' }
              </Button>
              <Form.Group>
                <a href="/createLogin">Need a login? Sign UP</a>
              </Form.Group>
            </Form>

          </Col>
        </Row>
      </Container>
    );
  }

  
}
