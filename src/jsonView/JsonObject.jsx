import React, { div } from "react";
import { OpeningBrace, ClosingBrace } from "./tags";
import { KeyValue } from "./Object/KeyValue";
const JsonObject = props => {
	const { json } = props;
	// useEffect();
	return (
		<div className="object">
			<OpeningBrace />
			{Object.keys(json).map((key, index) => (
				<KeyValue
					keyName={key}
					value={json[key]}
					key={index}
					depth={props.depth}
				/>
			))}
			<ClosingBrace />
		</div>
	);
};
export default JsonObject;
