import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img_1 from '../assets/v1.jpg';
import img_2 from '../assets/v2.jpg';
import img_3 from '../assets/v3.jpg';

export default class About extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img_1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>A terra não é plana</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img_2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Clássico é clássico</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img_3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Melhor cidade do Brasil</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}