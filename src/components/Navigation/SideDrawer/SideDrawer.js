import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import css from './SideDrawer.css';

const sideDrawer = (props) => {
	return (
		<React.Fragment>
			<Backdrop />
			<div className={css.SideDrawer}>
				<div className={css.Logo}>
					<Logo/>
				</div>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</React.Fragment>
	);
}

export default sideDrawer;
