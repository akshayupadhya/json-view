import React, { useState } from "react";
import { Utils } from "../utils/utils";
import { Tabs } from "../meta";
import { Key } from "../Object/Key";
import { Value } from "../Object/Value";
import { Minimizer } from "../minimizer";
export const KeyValue = props => {
	let { keyName, value, depth } = props;
	depth = (depth ? depth : 0) + 1;
	let isMinimized, minimize;
	const isNodeMinimizable = Utils.isArray(value) || Utils.isObject(value);
	if (isNodeMinimizable) {
		[isMinimized, minimize] = useState(depth >= 1);
	}
	const newProps = { isNodeMinimizable, isMinimized, minimize };
	return (
		<div className="key-value">
			{isNodeMinimizable ? (
				<Minimizer isMinimized={isMinimized} minimizer={minimize} />
			) : (
				<Tabs />
			)}
			<Key keyName={keyName} depth={depth} /> :
			<Value value={JSON.stringify(value)} depth={depth} {...newProps} />
		</div>
	);
};
