import React from "react";
const depthAnalyse = depth => (depth > 3 ? (depth % 3) + 1 : depth);
export const OpeningBrace = props => (
	<span className={`tag tag-depth-${depthAnalyse(props.depth)} openingBrace`}>
		{"{"}
	</span>
);
export const ClosingBrace = props => (
	<span className={`tag tag-depth-${depthAnalyse(props.depth)} closingBrace`}>
		{"}"}
	</span>
);
export const OpeningBracet = props => (
	<span className={`tag openingBrace tag-depth-${depthAnalyse(props.depth)}`}>
		{"["}
	</span>
);
export const ClosingBracet = props => (
	<span className={`tag closingBrace tag-depth-${depthAnalyse(props.depth)}`}>
		{"]"}
	</span>
);
