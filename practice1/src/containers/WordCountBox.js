import {connect} from "react-redux"
import {WordCountBox} from "../components/WordCountBox"

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
            type: "CLICK"
        }),
        onChange: (e) => dispatch({
            type: "UPDATE_TEXT",
            text: e.target.value
        })
    };
};

const WordCountBoxContainer = connect(mapStateToProps, mapDispatchToProps)(WordCountBox);

export default WordCountBoxContainer


