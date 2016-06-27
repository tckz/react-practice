import React,{PropTypes} from "react";

const WordCountBox = ({text, length, count, onChange, onClick}) => {
	<div className="wordCountBox">
		<input type="text" autoFocus="true" onChange={onChange} value={text} />
		Count: {length}
		<button onClick={onClick}>push</button>
		Count2: {count}
	</div>
}

WordCountBox.propTypes = {
	text: PropTypes.string.isRequired,
	length: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
}

export default WordCountBox

