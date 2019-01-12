import React from "react";

export const Tabs = props => (
	<span className={`meta tab ${props.newClass}`}>->|</span>
);
export const space = () => <span className="meta space">·</span>;
export const Comma = () => <span className="meta comma">,</span>;
export const DataType = props => (
	<span className="meta DataType">{props.DataType}</span>
);
