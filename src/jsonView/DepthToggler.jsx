import React, { Fragment } from "react";
import { minimizeContext } from "./Object/Value";
export const DeapthToggler = props => {
	const { depth } = props;
	const isToggleEnabled = depth >= 1;
	return (
		<Fragment>
			<minimizeContext.Consumer>
				{context => (
					<Fragment>
						{!isToggleEnabled ? (
							<Fragment>{props.children}</Fragment>
						) : context.isMinimized ? (
							<span onClick={() => context.minimize(!context.isMinimized)}>
								...
							</span>
						) : (
							<div className="notToggled">{props.children}</div>
						)}
					</Fragment>
				)}
			</minimizeContext.Consumer>
		</Fragment>
	);
};
