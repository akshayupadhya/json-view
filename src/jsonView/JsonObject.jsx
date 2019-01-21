import React, { Fragment } from "react";
import { OpeningBrace, ClosingBrace } from "./tags";
import { KeyValue } from "./Object/KeyValue";
import { DeapthToggler } from "./DepthToggler";
import { DataType } from "./meta";
import "./themes.scss";
const JsonObject = ({ json, depth, theme }) => {
	depth = depth || 0;
	theme = theme || "cobalt";
	return (
		<Fragment>
			{depth ? <DataType DataType="Object" /> : undefined}
			<div className={`object ${!depth ? theme : ""}`}>
				<OpeningBrace depth={depth ? depth : 1} />
				<DeapthToggler depth={depth}>
					<Fragment>
						{Object.keys(json).map((key, index) => (
							<KeyValue
								keyName={key}
								value={json[key]}
								key={index}
								depth={depth}
							/>
						))}
					</Fragment>
				</DeapthToggler>
				<ClosingBrace depth={depth ? depth : 1} />
			</div>
		</Fragment>
	);
};
export default JsonObject;
