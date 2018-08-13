import React from 'react';
import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let ingredients = Object.keys(props.ingredients).map((key) => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <BurgerIngredient key={`${key}_${i}`} type={key}/>
    });
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
