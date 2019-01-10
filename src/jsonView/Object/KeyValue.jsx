import React, { Fragment } from "react";
import { Tabs, Comma } from "../meta";
import { Key } from "../Object/Key";
import { Value } from "../Object/Value";
export const KeyValue = props => {
	let { keyName, value, depth } = props;
	depth = depth ? depth : 0;
	return (
		<div className="key-value">
			{[...Array(depth + 1)].map(i => (
				<Tabs key={i} />
			))}
			{/* <Tabs /> */}
			<Key keyName={keyName} /> :
			<Value value={JSON.stringify(value)} depth={depth} />
			<Comma />
		</div>
	);
};
