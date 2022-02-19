import React from 'react'
import State from "../data/State";

const SELECT_ASSEMBLAGE = "selectAssemblageType"

export default (state = State, action) => {

    switch (action.type) {
        case SELECT_ASSEMBLAGE: return {
            ...state, isOurAssemblage: !action.isOurAssemblage
        }
        default: return state
    }

}