import React from "react"
import ReactDOM from "react-dom"
import app from "./reducers"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {App} from "./components/App"

ReactDOM.render(
	<Provider store={createStore(app)}>
		<App />
	</Provider>,
	document.getElementById("content")
);

