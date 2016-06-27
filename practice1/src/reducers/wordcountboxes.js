const wordCountBox = (state = {
	text: "", 
	length: 0, 
	count: 0
}, action) => {
	switch (action.type) {
		case "CLICK":
			return Object.assign({}, state, {
				count: state.count + 1
			});
		case "UPDATE_TEXT":
			return Object.assign({} , state, {
				text: action.text,
				length: action.text.length
			});
		default:
			return state;
	}
};

const wordCountBoxes = (state = {
	boxes: []
}, action) => {
	switch (action.type) {
		case "ADD_BOX":
			return Object.assign({}, state, {
				boxes: [...state.boxes, {
					text: "added",
					length: 5,
					count: 0
				}]
			});
		default:
			return state;
	}
};

export default wordCountBox
export default wordCountBoxes

