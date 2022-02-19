import React from 'react';
import {connect} from "react-redux";
import Typical from "../Typical";
import {selectBaseType} from "../../ActionCreater";

let mapStateToProps = (state) => {
    return {
        isBase: state.typical.isBase
    }
}

let mapDispatch = {
    selectBaseType
}

// let WithRouter = withRouter(Posts)

const TypicalContainer = connect(mapStateToProps, mapDispatch) (Typical);

export default TypicalContainer