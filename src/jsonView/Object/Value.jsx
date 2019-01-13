import React, { Fragment, useState } from "react";
import JsonObject from "../JsonObject";
import { Utils } from "../utils/utils";
import { ArrayView } from "../Array/Array";
import { DataType, Comma, Tabs } from "../meta";
import { Minimizer } from "../minimizer";
export const Value = props => {
  let { depth, value, isArray, isLastElement } = props;
  depth = depth || 0;
  console.log(isArray, "isArray");
  const json = JSON.parse(value);
  const type = Utils.isObject(json)
    ? "Object"
    : Utils.isArray(json)
    ? "Array"
    : typeof (Number(value) || value === "true" || value === "false" || value);
  const [isMinimized, minimize] = useState(depth >= 1);
  return (
    <div className="value">
      {isArray ? (
        <Minimizer isMinimized={isMinimized} minimizer={minimize} />
      ) : (
        undefined
      )}
      {/* {isArray ? <Tabs newClass={`someClass`} /> : undefined} */}
      {type === "Object" ? (
        <JsonObject json={json} depth={depth + 1} />
      ) : type === "Array" ? (
        <ArrayView json={json} depth={depth + 1} />
      ) : (
        <Fragment>
          <DataType DataType={type} />
          <span className="generic">{value}</span>
        </Fragment>
      )}
      {isArray && !isLastElement ? <Comma /> : undefined}
    </div>
  );
};
