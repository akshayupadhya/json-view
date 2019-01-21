import React, { Fragment } from "react";
import { OpeningBracet, ClosingBracet } from "../tags";
import { Value } from "../Object/Value";
import { DeapthToggler } from "../DepthToggler";
import { DataType } from "../meta";
export const ArrayView = props => {
	const { json, depth } = props;
	const ArrayLength = json.length;
	return (
		<Fragment>
			{depth ? <DataType DataType="Array" /> : undefined}
			<div className={"array"}>
				<OpeningBracet depth={depth ? depth : 1} />
				<DeapthToggler depth={depth} length={json.length}>
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
				<ClosingBracet depth={depth ? depth : 1} />
			</div>
		</Fragment>
	);
};
