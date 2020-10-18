import React, { Component, Suspense } from 'react';
import { Spinner } from 'react-bootstrap';


export default class AnimalMain extends Component {

  render() {
    // console.log(this.props.params);
    let Calculator = null;
    switch(this.props.params.animal) {
      case 'quail':
        Calculator = React.lazy(() => import('./calculators/CalcQuail'));
        break;
      case 'rabbit':
        Calculator = React.lazy(() => import('./calculators/CalcRabbit'));
        break;
      case 'fish':
        Calculator = React.lazy(() => import('./calculators/CalcFish'));
        break;
      default: //Chicken
        Calculator = React.lazy(() => import('./calculators/ChickenEggs'));
    } 
    return(
      <React.Fragment>
        <div className="container">
          <h2>Production Calculator</h2>
          <div className="row">
            <div className="col">
              <Suspense fallback={<Spinner />}>
                <Calculator params={this.props.params} />
              </Suspense>
            </div>
          </div>
        </div>
      </React.Fragment>
    );    
  }
}