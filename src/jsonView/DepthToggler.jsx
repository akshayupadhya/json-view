import React, { Fragment, useState } from "react";
export const DeapthToggler = props => {
	const { depth } = props;
	const [isToggled, toggleObj] = useState(depth >= 1);
	const ToggleComp = () => {
		return depth >= 1 ? toggleObj(!isToggled) : undefined;
	};
	const isToggleEnabled = depth >= 1;
	return (
		<Fragment>
			{!!!isToggleEnabled ? (
				<Fragment>{props.children}</Fragment>
			) : isToggled ? (
				<span onClick={ToggleComp}>...</span>
			) : (
				<div className="notToggled">{props.children}</div>
			)}
		</Fragment>
	);
};
