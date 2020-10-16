import React, { Component } from 'react';
import CanvasGraph from './CanvasGraph';
import hash from 'object-hash';


export default class GraphChickenBroiler extends Component {
    buildDataset = (data) => {
      const days = (Math.ceil(parseInt(data.period) / 12 * 52));
      const x_labels = [];
      const line_labels = ['Chickens Negotiations', 'Staff/Area', 'Total'];
      const values = [[],[],[]];
      let total = 0;
      let chicken_age = 0;
      let n_of_chickens = 0;
      for(let i=0; i < days; ++i) {
        x_labels.push('days '+(i));
        //****************** Chickens Negotiations
        let v_chickens = 0;
        // Buy new Chicks
        if(chicken_age === 0) {
          n_of_chickens = this.props.data.chickens; 
          v_chickens = - ( n_of_chickens * this.props.data.chickPrice );
        }
        // Sell Chickens
        if(chicken_age === this.props.data.chickenMaturity - 1) {
          v_chickens = n_of_chickens * this.props.data.chickenPrice;
        }
        // last week
        if((i+1) === days) {
          v_chickens = n_of_chickens * this.props.data.chickenPrice * 
            (chicken_age / this.props.data.chickenMaturity);
        }
        values[0].push(v_chickens);
        //****************** Staff/Area
        let v_staff_area = -(this.props.data.staff + this.props.data.rent);
        values[1].push(v_staff_area);
        //******************Egg's
        let v_eggs = 0;
        if(chicken_age >= this.props.data.eggsMaturity) {
          v_eggs = ( n_of_chickens / this.props.data.chickens ) * this.props.data.eggs * this.props.data.eggsPrice;
        }
        // console.log(n_of_chickens);
        // console.log(this.props.data.chickens);
        // console.log(this.props.data.eggsPrice);
        values[2].push(v_eggs);
        //******************Total
        total += v_chickens+v_staff_area+v_eggs;
        values[3].push(total);
  
        // deathRate commes as int => 200 for 2%
        n_of_chickens = Math.ceil(n_of_chickens * ((100 - this.props.data.deathRate/100) / 100));
        console.log("#: ",n_of_chickens);      
        // console.log("Age: ",chicken_age);      
        chicken_age = (( chicken_age + 1 ) % this.props.data.chickenMaturity);
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
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            borderColor: 'rgb(255, 206, 86)',
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
    render() {
      const dataset = this.buildDataset(this.props.data);
      return (
        <React.Fragment>
          <div className="form-group row" style={{marginTop: "10px"}}>
            <label className="col-sm-4 col-form-label">Chick's Price Average (Buying)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="chickPrice"
                value={this.props.data.chickPrice} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>
          <div className="form-group row" style={{marginTop: "10px"}}>
            <label className="col-sm-4 col-form-label">Chicken's Price Average (Selling)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="chickenPrice"
                value={this.props.data.chickenPrice} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Egg's Price (at Sell)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control text-right" name="eggsPrice"
                value={this.props.data.eggsPrice} 
                onChange={this.props.onGraphSettingsChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Weekly Area cost/m<sup>2</sup></label>
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
            <label className="col-sm-4 col-form-label">Chicken Maturity (Days)</label>
            <div className="col-sm-8 row">
              <input type="range" className="form-control-range" name="chickenMaturity" max="200" 
                value={this.props.data.chickenMaturity} 
                onChange={this.props.onGraphSettingsChange} />
              <div>{this.props.data.chickenMaturity+' Days'}</div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Waiting for the First Egg (Days)</label>
            <div className="col-sm-8 row">
              <input type="range" className="form-control-range" name="eggsMaturity" 
                value={this.props.data.eggsMaturity} 
                onChange={this.props.onGraphSettingsChange} />
              <div>{this.props.data.eggsMaturity+' Weeks'}</div>
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
            <CanvasGraph data={dataset} key={hash(this.props.data)} />
              <pre>
                {
                  JSON.stringify(this.props.data, undefined, 2)
                }
                <br/>
                {
                  JSON.stringify(dataset, undefined, 2)
                }
              </pre>
          </div>
  
        </React.Fragment>
      );    
    }
  
    // data = {
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [
    //     {
    //       label: '# of Votes',
    //       data: [-12, 19, -3, 5, 2, 3],
    //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //       borderColor: 'rgb(255, 99, 132)',
    //       borderWidth: 1
    //     },
    //     {
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: 'rgb(54, 162, 235, 0.2)',
    //       borderColor: 'rgb(54, 162, 235)',
    //       borderWidth: 1
    //     },{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: 'rgba(255, 206, 86, 0.2)',
    //       borderColor: 'rgb(255, 206, 86)',
    //       borderWidth: 1
    //     },{
    //       label: 'Line Dataset',
    //       data: [50, 50, 50, -12, 55, 49],
    //       type: 'line',
    //       backgroundColor: 'rgba(0, 0, 0, 0)',
    //       borderColor: 'rgb(75, 192, 192)',
    //     }
    //   ]
    // }
  }