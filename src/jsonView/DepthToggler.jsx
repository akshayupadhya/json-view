import React, { Fragment } from "react";
export const DeapthToggler = props => {
	const { depth, isMinimized, minimizer } = props;
	const isToggleEnabled = depth >= 1;
	const ToggleNode = () => {
		if (minimizer) {
			minimizer(!isMinimized);
		}
	};
	return (
		<Fragment>
			{!isToggleEnabled ? (
				<Fragment>{props.children}</Fragment>
			) : isMinimized ? (
				<span onClick={ToggleNode}>...</span>
			) : (
				<div className="notToggled">{props.children}</div>
			)}
		</Fragment>
	);
};
