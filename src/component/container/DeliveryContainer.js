import React from 'react';
import {connect} from "react-redux";
import Delivery from "../Delivery";
import {selectDeliveryType} from "../../ActionCreater";

let mapStateToProps = (state) => {
    return {
        isOurDelivery: state.delivery.isOurDelivery
    }
}

let mapDispatch = {
    selectDeliveryType
}

const DeliveryContainer = connect(mapStateToProps, mapDispatch) (Delivery);

export default DeliveryContainer