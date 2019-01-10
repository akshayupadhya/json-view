import React, { Fragment } from "react";
import { OpeningBracet, ClosingBracet } from "../tags";
import { Comma } from "../meta";
import { Value } from "../Object/Value";
export const ArrayView = props => {
	const { json, depth } = props;
	return (
		<div className={"array"}>
			<OpeningBracet />
			<div className="ArrayView">
				{json.map((val, key) => (
					<Fragment>
						{/* <span key={key}>{JSON.stringify(val)}</span> */}
						<Value value={JSON.stringify(val)} depth={depth} />
						<Comma />
					</Fragment>
				))}
			</div>
			<ClosingBracet />
		</div>
	);
};
