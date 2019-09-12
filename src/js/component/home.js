import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SimpleCounter } from "./SimpleCounter.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="holder">
				<SimpleCounter />
			</div>
		);
	}
}
