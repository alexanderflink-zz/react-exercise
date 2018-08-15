import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
		totalPrice: 2,
		purchaseable: true,
		purchasing: false
	}

	updatePurchaseState() {

		// get amount of ingredients
		const ingredients = {
			...this.state.ingredients
		};
		const sum = Object.keys(ingredients).map(key => {
			return ingredients[key];
		}).reduce((sum, el) => {
			return sum + el;
		}, 0);

		// set state
		console.log(sum);
		this.setState({purchaseable: sum > 0});
	}

	componentDidUpdate(prevProps, prevState) {
		// check if ingredients changed, if so update purchaseable
		if (this.state.ingredients !== prevState.ingredients) {
			this.updatePurchaseState();
		}
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

	purchaseHandler = () => {
		this.setState({purchasing: true});
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
				<Modal show={this.state.purchasing}>
					<OrderSummary ingredients={this.state.ingredients}/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls
					onAdd={this.addIngredient}
					onRemove={this.removeIngredient}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					onPurchase={this.purchaseHandler}
				/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
