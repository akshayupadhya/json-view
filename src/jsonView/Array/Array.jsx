import React from "react";
import { OpeningBracet, ClosingBracet } from "../tags";
import { Value } from "../Object/Value";
import { DeapthToggler } from "../DepthToggler";
export const ArrayView = props => {
	const { json, depth, minimizer, isMinimized } = props;
	const ArrayLength = json.length;
	return (
		<div className={"array"}>
			<OpeningBracet />
			<DeapthToggler
				depth={depth}
				length={json.length}
				isMinimized={isMinimized}
				minimizer={minimizer}>
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
			</DeapthToggler>
			<ClosingBracet />
		</div>
	);
};
