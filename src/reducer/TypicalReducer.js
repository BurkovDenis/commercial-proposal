import React from 'react'
import State from "../data/State";

const SELECT_TYPE = "selectBaseType"

export default (state = State, action) => {

    switch (action.type) {
        case SELECT_TYPE: return {
            ...state, isBase: !action.isBase
        }
        default: return state
    }

}