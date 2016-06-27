import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

const text = (state = {text: "", length: 0, count: 0}, action) => {
	switch (action.type) {
		case "CLICK":
			return {
				count: state.count + 1
			};
		case "UPDATE_TEXT":
			return {
				text: action.text,
				length: action.text.length
			};
		default:
			return state;
	}
};


const mapStateToProps = (state) => {
	return {
		text: state.text,
		length: state.text.length,
		count: state.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (e) => dispatch({
			type: "CLICK",
			text: ""
		}),
		onChange: (e) => dispatch({
			type: "UPDATE_TEXT",
			text: e.target.value
		})
	};
};

let WordCountBox = ({text, length, count, onChange, onClick}) => {
	return (
		<div className="wordCountBox">
			<h1>Redux!</h1>
			<textarea rows="8" cols="80" placeholder="Type type" autoFocus="true" onChange={onChange}>
				{text}
			</textarea>
			<p><button onClick={onClick}>push</button></p>
			<p>Count: {length}</p>
			<p>Count2: {count}</p>
		</div>
	)
};

WordCountBox = connect(mapStateToProps, mapDispatchToProps)(WordCountBox);
ReactDOM.render(
	<Provider store={createStore(text)}>
		<WordCountBox />
	</Provider>,
	document.getElementById("content")
);
const elem = document.getElementById("markdown")
elem.innerHTML = "Yaaa4";

