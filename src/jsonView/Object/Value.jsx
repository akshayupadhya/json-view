import React, { Fragment, useState, createContext } from "react";
import JsonObject from "../JsonObject";
import { Utils } from "../utils/utils";
import { ArrayView } from "../Array/Array";
import { DataType, Comma } from "../meta";
import { Minimizer } from "../minimizer";
export const minimizeContext = createContext();
export const Value = props => {
	let { depth, value, isArray, isLastElement, isNodeMinimizable } = props;
	depth = (depth || 0) + 1;
	const json = JSON.parse(value);
	const type = Utils.isObject(json)
		? "Object"
		: Utils.isArray(json)
		? "Array"
		: typeof (Number(value) || value === "true" || value === "false" || value);
	let isMinimized, minimize;
	if (isNodeMinimizable) {
		// { isMinimized, minimize } = props;// i really dont know what is mistake here but it throws error
		isMinimized = props.isMinimized;
		minimize = props.minimize;
	} else {
		[isMinimized, minimize] = useState(depth >= 1);
	}
	return (
		<minimizeContext.Provider value={{ isMinimized, minimize }}>
			<div className="value">
				{isArray ? (
					<Minimizer isMinimized={isMinimized} minimizer={minimize} />
				) : (
					undefined
				)}
				{type === "Object" ? (
					<JsonObject json={json} depth={depth} />
				) : type === "Array" ? (
					<ArrayView json={json} depth={depth} />
				) : (
					<Fragment>
						<DataType DataType={type} />
						<span className="generic">{value}</span>
					</Fragment>
				)}
				{!!!isLastElement ? <Comma /> : undefined}
			</div>
		</minimizeContext.Provider>
	);
};
