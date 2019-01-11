import React from "react";
import { OpeningBracet, ClosingBracet } from "../tags";
import { Value } from "../Object/Value";
export const ArrayView = props => {
	const { json, depth } = props;
	const ArrayLength = json.length;
	return (
		<div className={"array"}>
			<OpeningBracet />
			<div className="ArrayView">
				{json.map((val, key) => (
					<Value
						key={key}
						value={JSON.stringify(val)}
						depth={depth}
						isArray={true}
						isLastElement={key === ArrayLength - 1}
					/>
				))}
			</div>
			<ClosingBracet />
		</div>
	);
};
