import React, { Component } from 'react';
import * as CalculatorsAPI from '../api/calculators';
import * as AccountAPI from '../api/account';

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
        <div style={{marginTop:'50px'}}>
          <p>Blá,Blá,Blá,Blá,Blá,Blá,Blá</p>
          <h3>Please, Log IN!</h3>
        </div>
      );  
    }
  }
}