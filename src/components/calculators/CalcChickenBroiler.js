import { Component } from "react"
import * as CalculatorsAPI from '../../api/calculators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { parse } from '@fortawesome/fontawesome-svg-core';

export default class CalcChickenBroiler extends Component {
    state = {
        id: 0,
        chickensinitialacomodation: 0,
        area: 0,
        food: 0,
        lockedfields: [false,false,false,false],
        showgraph : true,

        //** Poultry Chart State*/
        
        //** Technical Items */
    averageweight: 0,
    sanitationperiod : 0,
    chickenpriceperhead : 0,
    feedconversion : 0,


    //* Expenses
    foodPrice: 0,
    rent: 0,
    structurecosts: 0,
    staff: 0,
    chickenMaturity : 0,
    maintenance : 0,

    deathRate: 0,
    period: 12
  }


componentDidMount = async () => {
    if(this.props.params.id !== undefined && parseInt(this.props.params.id) > 0) {
      const calc = await CalculatorsAPI.getBroilerChickenCalculator(parseInt(this.props.params.id));
      console.log("CALC", calc);
      let defautLocked = [false,false,false,false];
      const locked = JSON.parse(calc.lockedfields.trim());
      if(calc.lockedfields !== undefined && typeof(locked) === "object") {
        calc.lockedfields = locked;
      } else {
        calc.lockedfields = defautLocked;
      } 
      
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

  setLockers = (n) => {
    const lockedfields = this.state.lockedfields;
    lockedfields[n] = !lockedfields[n];
    this.setState({lockedfields});
  }
  adjustValues = (name, value) => {
    const relations = [ 1, 0.25, 0.12];
    /**
     * Each chicken corresponds to:
     * 1     chicken
     * 0.5   m2
     * 0.3   kg of food
     
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
     
    }
    const newState = {};
    if(!this.state.lockedfields[0]) { newState.chickens = Math.ceil(chickens) };
    if(!this.state.lockedfields[1]) { newState.area = Math.ceil(chickens * relations[1]) };
    if(!this.state.lockedfields[2]) { newState.food = Math.ceil(chickens * relations[2]) };
   // if(!this.state.lockedfields[3]) { newState.eggs = Math.ceil(chickens * relations[3]) };
    return newState;
  }
  saveButtonAction = () => { 
    console.log("Savebtn", this.state);
    const data = this.state;
    data.lockedfields = JSON.stringify(data.lockedfields);
    CalculatorsAPI.postBroilerCalculator(data);
  }

  render() {
    console.log(this.props);
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
        
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary" 
            onClick={() => this.setState({"showGraph" : !this.state.showGraph})}>Toggle Graph</button>&nbsp;
          <button type="button" className="btn btn-primary" onClick = {this.saveButtonAction  }>Save</button>
        </div>
        {
          this.state.showGraph &&
          <GraphChickenBroiler data={this.state} onGraphSettingsChange={this.onGraphSettingsChange} />
        }
      </React.Fragment>
    );    
  }

}