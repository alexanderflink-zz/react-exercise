import React from 'react';
import css from './Layout.css';

const layout = (props) => {
	return (
		<React.Fragment>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<main className={css.content}>
				{props.children}
			</main>
		</React.Fragment>
	);
}

export default layout;
