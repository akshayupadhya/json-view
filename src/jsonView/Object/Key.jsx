import React from "react";

export const Key = props => (
	<span className={`key ${props.depth}`}>{props.keyName}</span>
);
