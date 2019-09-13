import React from "react";
import PropTypes from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="holder">
			<div className="row justify-content-center">
				<div className="clock">
					<i className="far fa-clock" />
				</div>

				<div className="sec4">{props.digitFour % 10}</div>

				<div className="sec3">{props.digitThree % 10}</div>

				<div className="sec2">{props.digitTwo % 10}</div>

				<div className="sec1">{props.digitOne % 10}</div>
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
