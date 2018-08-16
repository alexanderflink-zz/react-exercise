import React from 'react';
import css from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
	return (
		<React.Fragment>
			<Toolbar/>
			<main className={css.content}>
				{props.children}
			</main>
		</React.Fragment>
	);
}

export default layout;
