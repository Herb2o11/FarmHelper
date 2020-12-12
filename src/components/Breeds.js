import React, { Component } from 'react';
import { Card, Accordion, Jumbotron } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck'
import breedRhodeIslandRed from '../assets/breedRhodeIslandRed.jpg';
import breedPlymouthRock from '../assets/breedPlymouthRock.jpg';
import breedLeghorn from '../assets/breedLeghorn.jpg';
import breedMinorca from '../assets/breedMinorca.jpg';
import breedTest from '../assets/breedTest.jpg';
import rockData from '../assets/rockData.JPG';
import rhodeData from '../assets/rhodeData.JPG';
import leghornData_2 from '../assets/leghornData_2.jpg';
import breedCinnamonqueen from '../assets/breedCinnamonqueen.jpg';
import cinammonData from '../assets/cinammonData.JPG';
import buffData from '../assets/buffData.JPG';
import breedOrpington from '../assets/breedOrpington.jpg';
import breedAustralorps from '../assets/breedAustralorps.jpg';
import australorpData from '../assets/australorpData.JPG';
import breedNakedneck from '../assets/breedNakedneck.jpg';
import newHampshireBreed from '../assets/newHampshireBreed.JPG';
import newHampData from '../assets/newHampData.JPG';
import redShaver from '../assets/redShaver.jpg';
import breedBuckeye from '../assets/breedBuckeye.jpg';
import breedJerseyGiant from '../assets/breedJerseyGiant.jpg';
import sheed250Birds from '../assets/sheed250Birds.JPG';
import smallChickenCoop from '../assets/smallChickenCoop.JPG';
import hugeModel from '../assets/hugeModel.JPG';

export default class Breeds extends Component {



  render() {
    return (
      <div style={{ marginTop: '0px' }}>
        <React.Fragment>
          <div>

            <Jumbotron fluid style={{ padding: "15px" }}>

              <h1>Informative Page</h1>
              <p>
                This section contains information about Chickens Breeds, Chicken Coop or Sheed,
                and tips for nutrition.
                Just click in the sections below to see the information desired 
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
                          <CardDeck style={{ width: '1200px',
                                            height: '800px',
                                            marginLeft: '230px',
                                            marginRight: '300px',
                                            marginTop: '40px',
                                            marginBottom: '10px'}} >
                            <Card >
                              <Card.Img   variant="top"  
                                src= {breedRhodeIslandRed}  />
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
                                <Card.Img variant="top" src={rhodeData} /> 
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={breedAustralorps} />
                              <Card.Body>
                                <Card.Title>Australorp</Card.Title>
                                <Card.Text>
                                  With maximum egg production in mind, Australians continued to develop their own distrinct breed. The breed went by many names, struggling to distinguish itself from Orpingtons, and finally settled on Australorp in the 1920s.
                                  These birds are known for their excellent egg production. You’ll easily get 250 light brown eggs per year. The record holding hen laid 364 eggs in a 365 day period, without assistance of artificial lighting! However, they didn't get along well with other breeds.
                   {' '}
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={australorpData} />
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={breedPlymouthRock} />
                              <Card.Body>
                                <Card.Title>Plymouth Rock</Card.Title>
                                <Card.Text>
                                  Developed in America in the middle of the 19th century, this breed of chicken is historically the most popular in the United States.
                                  Up until WWII, no other breed was kept as extensively as the Plymouth Rock. The original birds were all of the Barred variety – with black and white stripped plumage –
                                  and other color varieties were developed later.
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={rockData} />
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
                      <Card.Body>This is the White layer section.
                <div>
                          <CardDeck  style={{ width: '1200px',
                                            height: '900px',
                                            marginLeft: '230px',
                                            marginRight: '270px',
                                            marginTop: '40px',
                                            marginBottom: '10px'}} >
                            <Card>
                              <Card.Img variant="top"
                                src={breedLeghorn} />
                              <Card.Body>
                                <Card.Title>Leghorn</Card.Title>
                                <Card.Text>
                                  Is it pronounced “Leghorn” or “Leghern” ? Either way, these birds are great!
                                  This breed was developed simultaneously in England and the U.S. in the 1850s,
                                  with ancestry tracing back to birds in Northern Italy. Leghorns are very active birds –
                                  scratching and foraging the day away. They are hardy and easy breeders, but are mostly
                                  known for their egg production. You could easily get 280 eggs in a year, even up to 300!
                                  Many of the white eggs you see in grocery stores are produced by this breed of chicken.
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={leghornData_2} />
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={breedMinorca} />
                              <Card.Body>
                                <Card.Title>Minorca</Card.Title>
                                <Card.Text>
                                  Minorcas are a Mediterranean breed of domestic chicken, and are in fact the largest fowl from this region. They have a greenish-black glossy plumage, and very large, bright red combs and wattles. These help with dissipating heat.
                                  They also have very large, almond shaped, white earlobes, common to other Mediterranean fowl.
                      content.{' '}
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={breedTest} />

                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={breedCinnamonqueen} />
                              <Card.Body>
                                <Card.Title>Cinnamon Queen</Card.Title>
                                <Card.Text>
                                  The Cinnamon Queen is a modern day production breed that lays brown eggs.
                                  They are a cross between a Rhode Island Red rooster and a Rhode Island White hen. At hatching,
                                  cockerels are a different color than the pullets so you can be sure of what you are getting—no s
                                  urprise roosters! They are also known as Golden Comets.
                                  Cinnamon Queens were developed specifically for their prolific egg laying ability. Pullets will lay 250-300 eggs
                                  per year and start much sooner than heritage breeds. These girls are a perfect fit if you’re looking to
                                  start a small egg farm or just want a ton of eggs!
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={cinammonData} />
                              </Card.Footer>
                            </Card>
                          </CardDeck >
                        </div>
                      </Card.Body>

                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Poultry (Broiler) Breeds
                            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>This is the Poultry Breeds section.
                <div>
                          <CardDeck style={{ width: '1200px',
                                            height: '900px',
                                            marginLeft: '230px',
                                            marginRight: '270px',
                                            marginTop: '40px',
                                            marginBottom: '10px'}}>
                            <Card>
                              <Card.Img variant="top"
                                src={breedNakedneck} />
                              <Card.Body>
                                <Card.Title>Naked Neck</Card.Title>
                                <Card.Text>
                                  The Naked Neck is a breed of chicken that is naturally devoid of feathers on its neck and vent. The breed is also called the Transylvanian Naked Neck, as well as the Turken. The name “Turken” arose from the mistaken idea that the bird was a hybrid of a chicken and the domestic turkey.

                                  They make for a good dual-purpose utility chicken. They only have about half the feathers of other chickens, so they are easier to pluck if raised for meat. They also lay a respectable number of eggs. They are very good foragers and are immune to most diseases, plus they are pretty fun to look at!
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <small className="text-muted">Harvest time : 11-18 weeks ; Easy to keep Decent egg and meat production ; Weight (female) 4 lbs ; Weight (male) 6 lbs</small>
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={breedBuckeye} />
                              <Card.Body>
                                <Card.Title>Buckeye</Card.Title>
                                <Card.Text>
                                  The Buckeye breed was created by Mrs. Nettie Metcalf in Ohio in the late 19th century. In fact, the Buckeye is the only American breed of chicken developed solely by a woman. She crossed Buff Cochins and Barred Plymouth Rocks to create a large, lazy fowl, and then added some Black-Breasted Red Game birds.

                                  Buckeyes are a dual-purpose breed of chicken with a lustrous red color. They have pea combs (distinguishing them from Road Island Reds), are cold-weather hardy, and adaptive to a variety of living conditions. These active, friendly birds are well-known for their abilities to hunt and catch mice!
                      {' '}
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <small className="text-muted">Harvest time : 16-21 weeks ; Excellent dual purpose Cold weather resistance ; Weight (female) 6.5 lbs ; Weight (male) 	9 lbs</small>
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={breedJerseyGiant} />
                              <Card.Body>
                                <Card.Title>Jersey Giant</Card.Title>
                                <Card.Text>
                                  The Jersey Giant chicken was developed between 1870 and 1890 in New Jersey. You can probably guess that these birds are pretty big! Roosters weight in at 13 pounds, and hens can easily grow up to 10 pounds! They are the largest purebred chicken breed.
                                  They are known to be fairly good layers compared to other large breeds, and are good winter layers. Expect about 260 large brown eggs per year
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <small className="text-muted">Harvest time : 	16-21 weeks ; Large ,Slow Growth, indicated for free range ; Weight (female)	10 lbs ; Weight (male) 13 lb 
                                </small>
                              </Card.Footer>
                            </Card>
                          </CardDeck>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      Dual Purpose
                            </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>This is the Dual Purpose section.
                <div>
                          <CardDeck style={{ width: '1200px',
                                            height: '900px',
                                            marginLeft: '230px',
                                            marginRight: '270px',
                                            marginTop: '40px',
                                            marginBottom: '10px'}}>
                            <Card>
                              <Card.Img variant="top"
                                src={breedOrpington} />
                              <Card.Body>
                                <Card.Title>Orpington</Card.Title>
                                <Card.Text>
                                  Orpington chickens were developed in the town of Orpington, England of all places! During the late 1800s, William Cook wanted to create a new breed that was dual purpose, but had white skin, which the British preferred for meat. Within 10 years, Orpingtons were a favorite in both England and America, and came in a variety of colors – black, white, buff, jubilee, and spangled.

                                  Orpingtons lay about 200 eggs per year. If you’re thinking about adding some to your flock, we suggest the Buff Orpington. They are known for being very docile – they make great pets!
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={buffData} />
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={redShaver} />
                              <Card.Body>
                                <Card.Title>Red Shaver</Card.Title>
                                <Card.Text>
                                  The Red Shaver is a sex-linked breed from Canada. Female chicks are a reddish-brown color with white
                                  underfeathers, while male chicks are white with a few red markings on the feathers.
                                  They are a dual purpose breed with a reputation for being quiet and calm. Hens
                                  lay up to 300 large brown eggs per year! Because they are Canadian, they are very well adapted to cold.
                   {' '}
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={rockData} />
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={newHampshireBreed} />
                              <Card.Body>
                                <Card.Title>New Hampshire</Card.Title>
                                <Card.Text>
                                  New Hampshire chickens have only been around since the 1930s and are closely related to the classic Rhode Island Red (RIR). Starting with RIRs, breeders were very selective and intensified traits of early maturity, rapid full feathering, and production of large brown eggs. These birds are a rich chestnut color, slightly lighter in shade than RIRs.

                                  New Hampshires are a dual-purpose breed, but are intended more for the table than for egg production. They prefer to free range and are known to be competitive with the rest of the flock.
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Card.Img variant="top" src={newHampData} />
                              </Card.Footer>
                            </Card>
                          </CardDeck>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      Required Space
              </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body> These are some Models for start the proper enviroment for you livestock
                      <div>
                          <CardDeck>
                            <Card>
                              <Card.Img variant="top"
                                src={smallChickenCoop} />
                              <Card.Body>
                                <Card.Title>Chicken Coop</Card.Title>
                                <Card.Text>
                                  Indicated for Small amounts and familiar business. Also can be used only for backyard chicken.
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                              <small className="text-muted">Structure indicated for maximum 100 animals</small>
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={sheed250Birds} />
                              <Card.Body>
                                <Card.Title>Medium Sheed</Card.Title>
                                <Card.Text>
                                  This sheed example can give shelter for around 250 hens, which cold produce a good amount of eggs. 
                   {' '}
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                              <small className="text-muted">Structure indicated for 250 in semi-enclose enviroment</small>
                              </Card.Footer>
                            </Card>
                            <Card>
                              <Card.Img variant="top" src={hugeModel} />
                              <Card.Body>
                                <Card.Title>Large Sheed</Card.Title>
                                <Card.Text>
                                  The structure indicated for those that want expand the business after the early maturity years.
                    </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                              <small className="text-muted">Structure indicated for expansion</small>
                              </Card.Footer>
                            </Card>
                          </CardDeck>
                        </div>

                      </Card.Body>
                    </Accordion.Collapse>
                    
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      Nutrition
              </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>Nutrition can vary depends on your region. However,we recommend a grass feed nutrition,  complemented by organic grains if it is possible, this can increase the sales price in until 3</Card.Body>
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