import React, { Fragment, useState } from "react";
export const DeapthToggler = props => {
	const { depth } = props;
	const [isToggled, toggleObj] = useState(depth >= 1);
	const ToggleComp = () => toggleObj(!isToggled);
	if (isToggled) {
		return (
			<span className="toggle" onClick={ToggleComp}>
				...
			</span>
		);
	} else {
		return <Fragment>{props.children}</Fragment>;
	}
	// return <span>working</span>;
};
