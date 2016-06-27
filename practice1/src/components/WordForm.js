import React from "react";
import WordCountBox from "./WordCountBox"

let WordForm = ({boxes, onClick}) => {
	return (
		<div className="wordForm">
			<ul>
			{
				boxes.map(box =>
					<WordCountBox />
				)
			}
			</ul>
		</div>
		<button onClick={onClick}>add</button>
	)
};


export default WordForm
