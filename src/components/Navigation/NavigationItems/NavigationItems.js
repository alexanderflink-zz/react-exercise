import React from 'react';
import css from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
	return (
		<ul className={css.NavigationItems}>
			<NavigationItem href="/" active>Burger Builder</NavigationItem>
			<NavigationItem href="/">Checkout</NavigationItem>
		</ul>
	);
}

export default navigationItems;
