import React, { Component } from 'react';
import GraphChicken from '../graphs/GraphChicken';
import * as CalculatorsAPI from '../../api/calculators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { parse } from '@fortawesome/fontawesome-svg-core';


export default class CalcChicken extends Component {
  state = {
    chickens: 0,
    area: 0,
    food: 0,
    eggs: 0,
    lockedfields: [false,false,false,false],
    showGraph : true,
    /** Graph State */
    chickPrice: 0,
    chickenPrice: 0,
    foodPrice: 0,
    eggsPrice: 0,
    rent: 0,
    staff: 0,
    chickenMaturity : 0,
    eggsMaturity: 0,
    deathRate: 0,
    period: 12
  }

  componentDidMount = async () => {
    if(this.props.params.id !== undefined && parseInt(this.props.params.id) > 0) {
      const calc = await CalculatorsAPI.getEggChickenCalculator(parseInt(this.props.params.id));
      this.setState(calc);
    } 
    // Updating Chicken Dependent Values
    this.setState(this.adjustValues('chickens', this.state.chickens));
  }
  
  onGraphSettingsChange = (e) => {
    const { name, value } = e.target;
    let parsed = parseFloat(value);
    if(value.includes('.') && !parsed.toString().includes('.')) {
      parsed = parsed.toString() + ".";
    }
    if(isNaN(parsed)) {
      this.setState({[name]: 0});
    } else {
      this.setState({[name]: value});

    }
  }

  handleForm = (e) => {
    const { name, value } = e.target
    let parsed_value =  parseFloat(value); // Parsing
    //console.log(parsed_value)
    if(Number.isNaN(parsed_value)) {
      this.setState(this.adjustValues(name, 0));
    } else {
      this.setState( this.adjustValues(name, parsed_value) );
    }
  }

  setLockers = (n) => {
    const lockedfields = this.state.lockedfields;
    lockedfields[n] = !lockedfields[n];
    this.setState({lockedfields});
  }

  adjustValues = (name, value) => {
    const relations = [ 1, 0.25, 0.12, 0.80];
    /**
     * Each chicken corresponds to:
     * 1     chicken
     * 0.5   m2
     * 0.3   kg of food
     * 0.75  eggs
     */
    let chickens = 0;
    switch(name) {
      default: //chickens
        chickens = value;
        break;
      case 'area':
        chickens = value * ( 1 / relations[1]);
        break;
      case 'food':
        chickens = value * ( 1 / relations[2]);
        break;
      case 'eggs':
        chickens = value * ( 1 / relations[3]);
        break;
    }
    const newState = {};
    if(!this.state.lockedfields[0]) { newState.chickens = Math.ceil(chickens) };
    if(!this.state.lockedfields[1]) { newState.area = Math.ceil(chickens * relations[1]) };
    if(!this.state.lockedfields[2]) { newState.food = Math.ceil(chickens * relations[2]) };
    if(!this.state.lockedfields[3]) { newState.eggs = Math.ceil(chickens * relations[3]) };
    return newState;
  }

  render() {
    return(
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Number of Chickens</label>
          <label className="col-sm-1 text-right col-form-label">
            <FontAwesomeIcon icon={(this.state.lockedfields[0]?faLock:faLockOpen)} 
              onClick={() => this.setLockers(0)}/>
          </label>
          <div className="col-sm-7">
            <input type="text" className="form-control text-right" value={this.state.chickens} 
              name="chickens" onChange={this.handleForm}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Area Needed (m<sup>2</sup>)</label>
          <label className="col-sm-1 text-right col-form-label">
            <FontAwesomeIcon icon={(this.state.lockedfields[1]?faLock:faLockOpen)} 
              onClick={() => this.setLockers(1)}/>
          </label>
          <div className="col-sm-7">
            <input type="numeric" className="form-control text-right" value={this.state.area} 
              name="area" onChange={this.handleForm}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Weekly Food Needed (kg)</label>
          <label className="col-sm-1 text-right col-form-label">
            <FontAwesomeIcon icon={(this.state.lockedfields[2]?faLock:faLockOpen)} 
              onClick={() => this.setLockers(2)}/>
          </label>
          <div className="col-sm-7">
            <input type="text" className="form-control text-right" value={this.state.food} 
              name="food" onChange={this.handleForm}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Eggs Daily</label>
          <label className="col-sm-1 text-right col-form-label">
            <FontAwesomeIcon icon={(this.state.lockedfields[3]?faLock:faLockOpen)} 
              onClick={() => this.setLockers(3)}/>
          </label>
          <div className="col-sm-7">
            <input type="text" className="form-control text-right" value={this.state.eggs} 
              name="eggs" onChange={this.handleForm}/>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary" 
            onClick={() => this.setState({"showGraph" : !this.state.showGraph})}>Toggle Graph</button>&nbsp;
          <button type="button" className="btn btn-primary">Save</button>
        </div>
        {
          this.state.showGraph &&
          <GraphChicken data={this.state} onGraphSettingsChange={this.onGraphSettingsChange} />
        }
      </React.Fragment>
    );    
  }
}