import React from 'react'
import State from "../data/State";

const SELECT_DELIVERY = "selectDeliveryType"

export default (state = State, action) => {

    switch (action.type) {
        case SELECT_DELIVERY: return {
            ...state, isOurDelivery: !action.isOurDelivery
        }
        default: return state
    }

}