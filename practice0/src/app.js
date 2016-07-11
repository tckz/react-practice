import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

const updateState = (state = {text: "", length: 0, count: 0}, action) => {
	switch (action.type) {
		case "CLICK":
			return Object.assign({}, state, {
				count: state.count + 1
			});
		case "UPDATE_TEXT":
			return Object.assign({}, state, {
				text: action.text,
				length: action.text.length
			});
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
			<textarea rows="2" cols="80" placeholder="Type type" autoFocus="true" onChange={onChange} value={text} />
			<p><button onClick={onClick}>push</button></p>
			<p>Count: {length}</p>
			<p>Count2: {count}</p>
		</div>
	)
};

const WordCountBoxConnected = connect(mapStateToProps, mapDispatchToProps)(WordCountBox);
ReactDOM.render(
	<Provider store={createStore(updateState)}>
		<WordCountBoxConnected />
	</Provider>,
	document.getElementById("content")
);
const elem = document.getElementById("markdown")
elem.innerHTML = "Ya";

