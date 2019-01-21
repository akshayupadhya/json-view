import React from "react";

export const Key = props => (
	<span className={`key depth-${props.depth}`}>{props.keyName}</span>
);
