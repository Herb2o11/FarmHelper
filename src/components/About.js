import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import chkimagebtn from '../assets/BarredRockHen.jpg';
import sheed from '../assets/sheed.jpg';
import nutrition from '../assets/nutrition.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Media from 'react-bootstrap/Media'


export default class About extends Component {

  

  render() {
    return (
      <React.Fragment>
        <div>
        
      <Jumbotron fluid>
      
        <h1>About Farm Helper</h1>
        <p>
          There are essential pilars to start an chicken business.
        </p>
        <div>
        <ul className="list-unstyled">
        
		  <Media as="li"> 
			<img
			  width={124}
			  height={124}
			  className="mr-3"
			  src={chkimagebtn}
			  alt="Chicken Breed"
			/>
    
    <Media.Body>
			  <h5>State the business purpose Eggs, Poultry production or dual purpose </h5>
			  <p>
				The business choice is essencialy related with the right breed choice. 
				<p>The Farmer Helper provides list with the most idicated brees to start the busines, according it purpose</p>
				<p>This link will provide some indications of the best breed for your business</p>
			  </p>
			</Media.Body>
		  </Media>
       
		  <Media as="li">
      
			<img
			  width={124}
			  height={124}
			  className="mr-3"
			  src={sheed}
        alt="Generic placeholder"
			/>
      
			<Media.Body>
			  <h5>Create a proper enviroment </h5>
			  <p>
				There are some basic indications of how to keep your flock, and limit the how many hens for square metters is essential to keep the flock helath.
				<p>The average is 4 to 6 hens for square metter in a chicken coop/sheed. The Farm Helper calculations works with 5 animals per square meters</p>
				<p>This link will provide some indications of how the proper structure for keep a semi-confined model</p>
			  </p>
			</Media.Body>
		  </Media>

		  <Media as="li">
			<img
			  width={124}
			  height={124}
			  className="mr-3"
			  src={nutrition}
			  alt="Generic placeholder"
			/>
			<Media.Body>
			  <h5>The flock nutrition</h5>
			  <p>
				The nutrition is a crucial point in the business, as it is responsible for a great amount of investment during the production phase.
        <p>Our calculator works based on a feed consupmtion table according the hens/chickens age for a full enclosed production.</p>
        <p>This feature gives freddom to the producer set the price according the current consuption. Since the hens will be raised in a open space, the food can be reduced.</p>
			  </p>
			</Media.Body>
		  </Media>
		</ul>
	</div>
    </Jumbotron>
        </div>

        
      </React.Fragment>
    );
  }
}