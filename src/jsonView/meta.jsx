import React from "react";

export const Tabs = () => <span className="meta tab">->|</span>;
export const space = () => <span className="meta space">·</span>;
export const Comma = () => <span className="meta comma">,</span>;
export const DataType = props => (
	<span className="meta DataType">{props.DataType}</span>
);
