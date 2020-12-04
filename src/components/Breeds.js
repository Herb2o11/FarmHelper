import React, { Component } from 'react';
import { Card, Accordion, Jumbotron } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck'

export default class Breeds extends Component {



  render() {
    return (
      <div style={{marginTop:'0px'}}>
      <React.Fragment>
        <div>

        <Jumbotron fluid style={{padding:"15px"}}>

            <h1>Informative Page</h1>
            <p>
              This sections contains the sugestions of good practices to start the Chicken Business the content is based on official material. However can alter according your region.
        </p>
        <div>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Layer Breeds (Brow)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body
                <div>
                              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </CardDeck>


                              </div>
                                
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Layer Breeds (White)
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Poultry (Broiler) Breeds
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Dual Purpose
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                          <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
              Required Space
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
              Nutrition
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>
          </Jumbotron>
        </div>
        

      </React.Fragment>

</div>
    );
  }
}