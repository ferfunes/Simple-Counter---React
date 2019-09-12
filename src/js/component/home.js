import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="holder container">
				<div className="row justify-content-center">
					<div className="clock">
						<i className="far fa-clock" />
					</div>

					<div className="sec4">0</div>

					<div className="sec3">0</div>

					<div className="sec2">0</div>

					<div className="sec1">0</div>
				</div>
			</div>
		);
	}
}
