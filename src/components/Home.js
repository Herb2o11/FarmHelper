import React, { Component } from 'react';
import * as CalculatorsAPI from '../api/calculators';
import * as AccountAPI from '../api/account';
import Carousel from 'react-bootstrap/Carousel'
import img_1 from '../assets/cover.JPG';
import img_2 from '../assets/location.JPG';
import img_3 from '../assets/control.JPG';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

export default class Home extends Component {
  
  state = {
    calculators: []
  }

  async componentDidMount() {
    if(AccountAPI.isAuthenticated()) {
      try{
        const calculators = await CalculatorsAPI.getCalculators();
        this.setState({calculators : calculators});
      } catch (error) {
        
      }
      
    }
  }

  renderCaltulators = () => {
    const res = [];
    if(this.state.calculators.length > 0) {
      res.push(
        <tr key={"TRCalc0"}>
          <th>
            Name of Project
          </th>
          <th>
            Type of LiveStock
          </th>
          <th>
            Number of Animals
          </th> 
          <th>
            Calculator Link
          </th>
          
        </tr>
      );  
      console.log (this.state.calculators)
      this.state.calculators.forEach(calc => {
        let kind = '';
        switch(calc.type) {
          case "ChickenEggs":
            kind = 'Chicken (Eggs)';
            break;
          case "ChickenBroiler":
            kind = 'ChickenBroiler (Broiler)';
            break;
        default:
            kind = 'Other';
        }
        
        res.push(
          <tr key={"TRCalc" + calc.id}>
            <td>
              <a href={'calc/' + calc.type + '/' + calc.id}> {calc.description} </a>
            </td>
            <td>
              {kind}
            </td>
            <td style={{textAlign:'right'}}>
              {calc.numberOfAnimals}
            </td>
            <td style={{textAlign:'right'}}>
              <a href={'calc/' + calc.type + '/' + calc.id}>Select</a>
            </td>
          </tr>
        );  
      });
    } else {
      res.push(
        <tr key={"TRCalcNot"}>
          <td>
            Nothing to show :/
          </td>
        </tr>
      );
    }
    return (
      <table className="table" style={{width:'80%', margin:'auto'}}>
        <tbody>
          { res }
        </tbody>
      </table>
    );
  }

  render() {
    if(AccountAPI.isAuthenticated()){
      return (
        <div style={{marginTop:'50px'}}>
          { this.renderCaltulators() }
        </div>
      );
    } else {
      return (
        <div style={{marginTop:'0px'}}>
          <React.Fragment>
        <div>
      <Jumbotron fluid>
      
        <h1>Farm Helper Application </h1>
        <p>
        Farmer Helper is an application tailored to supply the basic need of a Smal Lot farmer (Chicken Raiser),
        providing meaningful information based on the size of their livestock.
        <p>This application is recommended for a free range chickens for both modalities eggs and poultry meat</p>
        <p>Farmer Helper is divided into three steps below:</p> 
        </p>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img_1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Pick your chicken breed</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img_2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Define your space</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img_3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Control your Production</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    </Jumbotron>
        </div>

        
      </React.Fragment>
          
        </div>
      );  
    }
  }
}