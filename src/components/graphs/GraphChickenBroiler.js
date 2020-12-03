import React, { Component } from 'react';
import CanvasGraph from './CanvasGraph';
import { chickenBroilerFoodCfg, chickenBroilerWeightCfg  } from '../../config/calculators_config';

import hash from 'object-hash';


export default class GraphChickenBroiler extends Component {


  calcDeathRate = (deathRate, n_of_chickens) => {
    const new_n_of_chickens = Math.ceil(n_of_chickens * (1 - deathRate));
      // If deathRate is so small that no Chicken has died
      if(new_n_of_chickens!==n_of_chickens) {
        // Calc how many (%) has died and take of the death rate for next week
        const percentChickenDead = 1 - (new_n_of_chickens/n_of_chickens);
        deathRate -= percentChickenDead;
      } 
      return {
      n_of_chickens: new_n_of_chickens,
      deathRate: deathRate
      }
  }

  buildFinancialDataset = (data) => {
    const weeks = (Math.ceil(parseInt(data.period) / 12 * 52));
    const x_labels = [];
    const line_labels = ['Chickens Negotiations', 'Staff/Area', 'Food', 'Total'];
    const values = [[],[],[],[]];
    let total = 0;
    let chicken_age = 1;
    let n_of_chickens = 0;
    // deathRate commes as int => 200 for 2%
    const default_death_rate = this.props.data.deathRate/10000;
    // First Week's death rate is always equal to the user's set.
    let week_deathRate = default_death_rate; 
    for(let i=1; i<= weeks; ++i) {
      // console.log({
      //   "i":i,
      //   "Age":chicken_age,
      //   "#":n_of_chickens
      // });
      x_labels.push('Week '+(i));
      
      //****************** Chickens Negotiations
      let v_chickens = 0;
      // Buy new Chicks
      if(chicken_age === 1) {
        n_of_chickens = this.props.data.chickens; 
        week_deathRate = default_death_rate; 
        v_chickens = - ( n_of_chickens * this.props.data.chickPrice );
      }
      // Sell Chickens at Maturity or at last weeks project
      if(chicken_age === this.props.data.chickenMaturity || i === weeks) {
        v_chickens = n_of_chickens * chickenBroilerWeightCfg[chicken_age] * this.props.data.chickenPrice;
      }
      values[0].push(v_chickens);
      
      //****************** Staff/Area
      let v_staff_area = -(this.props.data.staff + this.props.data.rent);
      values[1].push(v_staff_area);

      //****************** Food
      let v_food = - (n_of_chickens * chickenBroilerFoodCfg[chicken_age] * this.props.data.foodPrice);
      values[2].push(v_food);

      
      //******************Total
      total += v_chickens + v_staff_area + v_food;
      values[3].push(total);

      const chickenStat = this.calcDeathRate(week_deathRate, n_of_chickens);
      n_of_chickens = chickenStat.n_of_chickens;
      week_deathRate = chickenStat.deathRate + default_death_rate;
      
      chicken_age = ( chicken_age % this.props.data.chickenMaturity ) + 1;
    }
    
    return {
      labels: x_labels,
      datasets: [
        {
          label: line_labels[0],
          data: values[0],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 1
        },
        {
          label: line_labels[1],
          data: values[1],
          backgroundColor: 'rgb(54, 162, 235, 0.6)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1
        },{        
          label: line_labels[2],
          data: values[2],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgb(153, 102, 255)',
          borderWidth: 1
        },{
          label: line_labels[3],
          data: values[3],
          type: 'line',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(75, 192, 192)',
        }
      ]
    }
  }

  buildBroilerDataset = (data) => {
    const weeks = (Math.ceil(parseInt(data.period) / 12 * 52));
    const x_labels = [];
    const line_labels = ['Total Number of Chickens', 'Weekly Food (Kg)', 'Total Amount of Food (Hundreds of kg)' ];
    const values = [[],[],[]];
    let chicken_age = 1;
    let n_of_chickens = 0;
    let acum_eggs = 0;
    let acum_food = 0;
    // deathRate commes as int => 200 for 2%
    const default_death_rate = this.props.data.deathRate/10000;
    // First Week's death rate is always equal to the user's set.
    let week_deathRate = default_death_rate; 

    for(let i=1; i<= weeks; ++i) {
      x_labels.push('Week '+(i));

      if(chicken_age === 1) {
        week_deathRate = default_death_rate; 
        n_of_chickens = this.props.data.chickens; 
      }

      //******************Chickens
      values[0].push(n_of_chickens);

      //******************Food
      const food = (n_of_chickens * chickenBroilerFoodCfg[chicken_age]);
      values[1].push(food);
      acum_food += food;
      values[2].push(acum_food/100);

      const chickenStat = this.calcDeathRate(week_deathRate, n_of_chickens);
      n_of_chickens = chickenStat.n_of_chickens;
      week_deathRate = chickenStat.deathRate + default_death_rate;
      
      chicken_age = ( chicken_age % this.props.data.chickenMaturity ) + 1;
    }
    
    return {
      labels: x_labels,
      datasets: [
        {
          label: line_labels[0],
          data: values[0],
          type: 'line',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgb(255, 206, 86)',
          borderWidth: 1
        },{        
          label: line_labels[1],
          data: values[1],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgb(153, 102, 255)',
          borderWidth: 1
        },{
          label: line_labels[2],
          data: values[2],
          type: 'line',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(75, 192, 192)',
        }
      ]
    }
  }

    render() {
      let dataset = null;
      let yStack = false;
      switch(this.props.data.graph_type) {
        default:
        case 0:
          dataset = this.buildFinancialDataset(this.props.data);
          yStack = true;
          break;
        case 1:
          dataset = this.buildBroilerDataset(this.props.data);
          break;
      }
      return (
        <React.Fragment>
          <div className="form-group row" style={{marginTop: "10px"}}>
            <label className="col-sm-4 col-form-label">Chick's Price <strong>(Buying: $ / Unit)</strong></label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="chickPrice"
                value={this.props.data.chickPrice} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>
          <div className="form-group row" style={{marginTop: "10px"}}>
            <label className="col-sm-4 col-form-label">Chicken's Price <strong>(Selling: $ / Kg)</strong></label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="chickenPrice"
                value={this.props.data.chickenPrice} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>     
          <div className="form-group row">
          <label className="col-sm-4 col-form-label">Food Price / Kg</label>
          <div className="col-sm-8">
            <input type="text" className="form-control text-right" name="foodPrice"
              value={this.props.data.foodPrice} 
              onChange={this.props.onGraphSettingsChange} />
          </div>
        </div>    
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Weekly General cost/m<sup>2</sup></label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="rent"
                value={this.props.data.rent} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Weekly Staff Cost</label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="staff"
                value={this.props.data.staff} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Chicken Maturity (Weeks)</label>
            <div className="col-sm-8 row">
              <input type="range" className="form-control-range" name="chickenMaturity" max="16" 
                value={this.props.data.chickenMaturity} 
                onChange={this.props.onGraphSettingsChange} />
                <div>{this.props.data.chickenMaturity+' Weeks'}</div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Weekly Mortality Rate (%)</label>
            <div className="col-sm-8 row">
              <input type="range" className="form-control-range" name="deathRate" 
                value={this.props.data.deathRate} max="200" min = "0"
                onChange={this.props.onGraphSettingsChange} />
                
              <div>{this.props.data.deathRate/100+' %'}</div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label"><strong>Render</strong></label>
            <div className="col-sm-8 row btn-group" role="group">
              <button type="button" className={"btn "+ (this.props.data.period===3?'btn-light':'btn-secondary')}
                name="period" value={3} onClick={this.props.onGraphSettingsChange}>3 Month</button>
              <button type="button" className={"btn "+ (this.props.data.period===6?'btn-light':'btn-secondary')}
                name="period" value={6} onClick={this.props.onGraphSettingsChange}>6 Months</button>
              <button type="button" className={"btn "+ (this.props.data.period===12?'btn-light':'btn-secondary')}
                name="period" value={12} onClick={this.props.onGraphSettingsChange}>12 Months</button>
              <button type="button" className={"btn "+ (this.props.data.period===24?'btn-light':'btn-secondary')}
                name="period" value={24} onClick={this.props.onGraphSettingsChange}>2 Years</button>
              <button type="button" className={"btn "+ (this.props.data.period===36?'btn-light':'btn-secondary')}
                name="period" value={36} onClick={this.props.onGraphSettingsChange}>3 Years</button>
              <button type="button" className={"btn "+ (this.props.data.period===60?'btn-light':'btn-secondary')}
                name="period" value={60} onClick={this.props.onGraphSettingsChange}>5 Years</button>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label"><strong>Graph</strong></label>
            <div className="col-sm-8 row btn-group" role="group">
              <button type="button" className={"btn "+ (this.props.data.graph_type===0?'btn-light':'btn-secondary')}
                name="graph_type" value={0} onClick={this.props.onGraphSettingsChange}>Financial</button>
              <button type="button" className={"btn "+ (this.props.data.graph_type===1?'btn-light':'btn-secondary')}
                name="graph_type" value={1} onClick={this.props.onGraphSettingsChange}>Chicken/Food</button>
            </div>
          </div>
          <div className="form-group row">
            <CanvasGraph data={dataset} key={hash(this.props.data)} />
          </div>
  
        </React.Fragment>
      );    
    }
  
  
  }