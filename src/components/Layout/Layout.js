import React from 'react';
import css from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
	return (
		<React.Fragment>
			<Toolbar />
			<SideDrawer />
			<main className={css.content}>
				{props.children}
			</main>
		</React.Fragment>
	);
}

export default layout;
