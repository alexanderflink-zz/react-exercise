import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICE = {
	meat: 1,
	salad: 0.3,
	cheese: 0.7,
	bacon: 1
};

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			bacon: 0,
			salad: 0,
			cheese: 1,
			meat: 1,
		},
		totalPrice: 4
	}

	addIngredient = (type) => {
		// add one ingredient of type
		this.modifyIngredient(type, 1);
	}

	removeIngredient = (type) => {
		// remove one ingredient of type
		this.modifyIngredient(type, -1);
	}

	modifyIngredient(type, amount) {
		// calculate new ingredient count and price
		const ingredientCount = this.state.ingredients[type] + amount;
		const totalPrice = this.state.totalPrice + (PRICE[type] * amount);

		if (ingredientCount < 0) return; // can't be less than zero ingredients

		// set state immutably
		const ingredients = {
			...this.state.ingredients
		};
		ingredients[type] = ingredientCount;

		this.setState({ingredients, totalPrice});
	}

	render() {

		// figure out which ingredients are zero and should have disabled "less" buttons
		const disabledInfo = {
			...this.state.ingredients
		};
		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<React.Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls
					onAdd={this.addIngredient}
					onRemove={this.removeIngredient}
					disabled={disabledInfo}
				/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
