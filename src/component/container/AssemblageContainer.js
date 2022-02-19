import React from 'react';
import {connect} from "react-redux";
import {selectAssemblageType} from "../../ActionCreater";
import Asseblage from "../Asseblage";

let mapStateToProps = (state) => {
    return {
        isOurAssemblage: state.assemblage.isOurAssemblage
    }
}

let mapDispatch = {
    selectAssemblageType: selectAssemblageType
}

const AssemblageContainer = connect(mapStateToProps, mapDispatch) (Asseblage);

export default AssemblageContainer