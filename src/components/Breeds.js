import React, { Component } from 'react';
import { Card, Accordion, Jumbotron } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck'
import breedRhodeIslandRed from '../assets/breedRhodeIslandRed.jpg';
import breedPlymouthRock from '../assets/breedPlymouthRock.jpg';
import redShaver from '../assets/redShaver.jpg';
export default class Breeds extends Component {

  

  render() {
    return (
      <div style={{marginTop:'0px'}}>
      <React.Fragment>
        <div>

        <Jumbotron fluid style={{padding:"15px"}}>

            <h1>Informative Page</h1>
            <p>
              This section contains information about Chickens Breeds, Chicken Coop or Sheed, 
              and tips for nutrition. 
              Just click in the sections below to see the desider information
        </p>
        <div>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Layer Breeds (Brown)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>This is the Brown layer section. 
                <div>
               <CardDeck>
                <Card>
                  <Card.Img variant="top" 
                  src={breedRhodeIslandRed} />
                  <Card.Body>
                    <Card.Title>Rhode Island Red</Card.Title>
                    <Card.Text>
                    Rhode Island Reds are a great choice for beginner chicken-keepers, or expert small flock keepers alike!
                     Developed in Massachusetts and Rhode Island in the late 1800s, these birds are a hardy, 
                     dual purpose breed. They are very low maintenance, 
                     and can tolerate less than favorable conditions. Hens lay about 5 – 7 eggs per week.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">5 – 7 eggs per week.Good For Beginners</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src= {redShaver} />
                  <Card.Body>
                    <Card.Title>Red Shaver</Card.Title>
                    <Card.Text>
                    The Red Shaver is a sex-linked breed from Canada. Female chicks are a reddish-brown color with white
                     underfeathers, while male chicks are white with a few red markings on the feathers.
                      They are a dual purpose breed with a reputation for being quiet and calm. Hens 
                    lay up to 300 large brown eggs per year! Because they are Canadian, they are very well adapted to cold.
                      content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Cold Adapted until 300 egg year</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src= {breedPlymouthRock} />
                  <Card.Body>
                    <Card.Title>Plymouth Rock</Card.Title>
                    <Card.Text>
                    Developed in America in the middle of the 19th century, this breed of chicken is historically the most popular in the United States.
                     Up until WWII, no other breed was kept as extensively as the Plymouth Rock. The original birds were all of the Barred variety – with black and white stripped plumage –
                      and other color varieties were developed later. 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                        <small className="text-muted">Hard, Docile, </small>
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