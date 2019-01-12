import React from "react";
import { Comma, Tabs } from "../meta";
import { Key } from "../Object/Key";
import { Value } from "../Object/Value";
export const KeyValue = props => {
	let { keyName, value, depth } = props;
	depth = (depth ? depth : 0) + 1;
	return (
		<div className="key-value">
			<Tabs />
			<Key keyName={keyName} /> :
			<Value value={JSON.stringify(value)} depth={depth} />
			<Comma />
		</div>
	);
};
