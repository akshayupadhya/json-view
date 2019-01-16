import React from "react";
import { Tabs } from "./meta";

export const Minimizer = props => {
	const { isMinimized, minimizer } = props;
	return (
		<Tabs
			newClass={!isMinimized ? "rotated" : ""}
			clickHandler={() => minimizer(!isMinimized)}
		/>
	);
};
