import React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let ingredients = props.ingredients.map((ingredient, i) => {
    return [...Array(ingredient.amount)].map((_, j) => {
      return <BurgerIngredient key={`${i}_${j}`} type={ingredient.type}/>
    })
  }).reduce((arr, element) => {
    return arr.concat(element);
  }, []);

  if (ingredients.length === 0) {
    ingredients = (<p>Start adding ingredients!</p>)
  }
  return (
    <div className={css.burger}>
      <BurgerIngredient type="bread-top"/>
      {ingredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;
