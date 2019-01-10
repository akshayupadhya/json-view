import React, { Fragment } from "react";
import JsonObject from "../JsonObject";
import { Utils } from "../utils/utils";
import { ArrayView } from "../Array/Array";
import { DataType, Tabs } from "../meta";
export const Value = props => {
	let { depth, value } = props;
	// depth = depth || 0;
	const json = JSON.parse(value) || value;
	if (Utils.isObject(json)) {
		return [
			<DataType DataType={"object"} />,
			<JsonObject json={json} depth={depth + 1} />
		];
	} else if (Utils.isArray(json)) {
		return [
			<DataType DataType="array" />,
			<ArrayView json={json} depth={depth + 1} />
		];
	}
	return [
		<Fragment>
			{/* {[...Array(depth + 1)].map(i => (
				<Tabs key={i} />
			))} */}
		</Fragment>,
		<DataType DataType={typeof (Number(value) || value)} />,
		<span className={`value ${depth} generic`}>{value}</span>
	];
};
