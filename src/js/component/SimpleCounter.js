import React from "react";
import PropTypes from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="row justify-content-center">
			<div className="clock">
				<i className="far fa-clock" />
			</div>

			<div className="sec4">{props.digitFour}</div>

			<div className="sec3">{props.digitThree}</div>

			<div className="sec2">{props.digitTwo}</div>

			<div className="sec1">{props.digitOne}</div>
		</div>
	);
};

var count = 0;
setInterval(function() {
	const sec4 = Math.floor(count / 1000);
	const sec3 = Math.floor(count / 100);
	const sec2 = Math.floor(count / 10);
	const sec1 = Math.floor(count / 1);
	console.log(sec4, sec3, sec2, sec1);

	count++;
	SimpleCounter.props.digitOne = { sec1 };
}, 1000);

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
