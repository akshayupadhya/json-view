import React, { Fragment } from "react";
import JsonObject from "../JsonObject";
import { Utils } from "../utils/utils";
import { ArrayView } from "../Array/Array";
import { DataType, Comma } from "../meta";
export const Value = props => {
	let { depth, value, isArray, isLastElement } = props;
	depth = depth || 0;
	const json = JSON.parse(value);
	const type = Utils.isObject(json)
		? "Object"
		: Utils.isArray(json)
		? "Array"
		: typeof (Number(value) || value === "true" || value === "false" || value);
	return (
		<div className="value">
			<DataType DataType={type} />
			{type === "Object" ? (
				<JsonObject json={json} depth={depth + 1} />
			) : type === "Array" ? (
				<ArrayView json={json} depth={depth + 1} />
			) : (
				<Fragment>
					<span className="generic">{value}</span>
					{isArray && !isLastElement ? <Comma /> : ""}
				</Fragment>
			)}
		</div>
	);
};
