import React from "react";

export const Tabs = props => {
	const { newClass, clickHandler } = props;
	return (
		<span
			className={`meta tab ${newClass ? newClass : ""}`}
			onClick={() => (clickHandler ? clickHandler() : undefined)}>
			⟹
		</span>
	);
};
export const space = () => <span className="meta space">·</span>;
export const Comma = () => <span className="meta comma">,</span>;
export const DataType = props => (
	<span className="meta DataType">{props.DataType}</span>
);
