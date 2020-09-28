import React, { Component } from 'react';
import * as CalculatorsAPI from '../api/calculators';
import * as AccountAPI from '../api/account';

export default class Home extends Component {
  
  state = {
    calculators: []
  }

  async componentDidMount() {
    if(AccountAPI.isAuthenticated()) {
      const calculators = await CalculatorsAPI.getCalculators();
      this.setState({calculators : calculators});
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
            Kind
          </th>
          <th>
            Number of Animals
          </th>
        </tr>
      );  
      this.state.calculators.forEach(calc => {
        let kind = '';
        switch(calc.kind) {
          case 'chicken':
            kind = 'Chicken (Eggs)';
            break;
          default:
            kind = 'Other';
        }
        res.push(
          <tr key={"TRCalc" + calc.id}>
            <td>
              <a href={'calc/' + calc.kind + '/' + calc.id}> {calc.name} </a>
            </td>
            <td>
              {kind}
            </td>
            <td style={{textAlign:'right'}}>
              {calc.animals}
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