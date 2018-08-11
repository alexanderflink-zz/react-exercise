import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

	state = {
		ingredients: [
		]
	}

	render() {
		return (
			<React.Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<div>controls</div>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
