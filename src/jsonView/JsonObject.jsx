import React, { Fragment } from "react";
import { OpeningBrace, ClosingBrace } from "./tags";
import { KeyValue } from "./Object/KeyValue";
import { DeapthToggler } from "./DepthToggler";
const JsonObject = props => {
	let { json, depth } = props;
	depth = depth || 0;
	return (
		<div className="object">
			<OpeningBrace />
			<DeapthToggler depth={depth}>
				<Fragment>
					{Object.keys(json).map((key, index) => (
						<KeyValue
							keyName={key}
							value={json[key]}
							key={index}
							depth={props.depth}
						/>
					))}
				</Fragment>
			</DeapthToggler>
			<ClosingBrace />
		</div>
	);
};
export default JsonObject;
