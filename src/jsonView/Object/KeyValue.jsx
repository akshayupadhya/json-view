import React from "react";
import { Comma } from "../meta";
import { Key } from "../Object/Key";
import { Value } from "../Object/Value";
export const KeyValue = props => {
	let { keyName, value, depth } = props;
	depth = depth ? depth : 0;
	return (
		<div className="key-value">
			<Key keyName={keyName} /> :
			<Value value={JSON.stringify(value)} depth={depth} />
			<Comma />
		</div>
	);
};
