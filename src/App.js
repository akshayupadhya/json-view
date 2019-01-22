import React, { Component, Fragment } from "react";
import JsonObject from "./jsonView/JsonObject";
import data from "./data";
// import "./App.css";

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>JSON View</h1>
				<JsonObject json={data} />
			</Fragment>
		);
	}
}

export default App;
