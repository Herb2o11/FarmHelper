import React, { Component } from 'react';
import { Form, Button, Container, Spinner,  Row, Col, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import * as account from '../api/account';


export default class Signup extends Component {

  state = {
    username: '',
    password: '',
    confirm_password: '',
    password_is_equal: true,
    // redirect: false,
    loading: false,
    showAlert: false,
    variant: 'success',
    message: ''
  };

  register = async () => {
    const { username, password } = this.state;
    try {
      this.setState({ loading: true });
      const request = await account.signUp(username, password);
      if(request.status !== undefined) {
        this.setState({ loading: false, variant: request.status, message: request.message, showAlert: true});
        } else {
        this.setState({ loading: false, variant: 'danger', message: 'Ooopss.. Something went wrong', showAlert: true});
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, variant: 'danger', message: error.message, showAlert: true});
    }
  }

  redirect = () => {
    // if (this.state.redirect) {
    //   return <Redirect to='/' />
    // }
    // return null;
  }

  //User can Login pressing Enter Key instead of click the button
  keyPressed = (event) => {
    if (event.key === "Enter" && 
        this.state.username!=='' && this.state.password!=='' &&
        this.state.confirm_password!==''  && this.state.password_is_equal) {
      this.register();
    }
  }

  checkPassword = (e) => {
    const { name, value } = e.target;
    const secondField = name=='confirm_password'?this.state.password:this.state.confirm_password;
    if(secondField === '' || value === '') {
      this.setState({[name]: value});
    } else {
      if(secondField === value) {
        this.setState({[name]: value, password_is_equal:true});
      } else {
        this.setState({[name]: value, password_is_equal:false});
      }
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
              <Form.Group>
                <h3>Email address</h3>
                <Form.Control type="email" placeholder="Enter email" onKeyPress={this.keyPressed}
                  value={this.state.username} onChange={(evt) => this.setState({"username": evt.target.value})} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <h3>Choose a Password</h3>
                <Form.Control type="password" placeholder="Password" onKeyPress={this.keyPressed}
                  value={this.state.password} name="password"
                  onChange={this.checkPassword} />
              </Form.Group>
              <Form.Group>
                <h3>Confirm Password</h3>
                <Form.Control type="password" placeholder="Confirm Password" onKeyPress={this.keyPressed}
                  value={this.state.confirm_password}  name="confirm_password"
                  onChange={this.checkPassword} isInvalid={!this.state.password_is_equal} />
              </Form.Group>
              <Button variant="primary" className="LoginButton" type="button" 
                  disabled={this.state.username==='' || this.state.password==='' ||
                             this.state.confirm_password===''  || !this.state.password_is_equal}
                  style={{ width: '100%', fontWeight: 'bold' }} onClick={() => this.register()}>
                { this.state.loading ? <Spinner animation='border' /> : 'Sign UP' }
              </Button>
            </Form>

          </Col>
        </Row>
      </Container>
    );
  }

  
}
