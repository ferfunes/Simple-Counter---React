//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { SimpleCounter } from "./component/SimpleCounter.js";

//render your react application

var count = 0;
setInterval(function() {
	const sec4 = Math.floor(count / 1000);
	const sec3 = Math.floor(count / 100);
	const sec2 = Math.floor(count / 10);
	const sec1 = Math.floor(count / 1);

	count++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={sec1}
			digitTwo={sec2}
			digitThree={sec3}
			digitFour={sec4}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//ReactDOM.render(<Home />, document.querySelector("#app"));
