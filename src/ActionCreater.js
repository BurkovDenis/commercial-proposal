import React from 'react'

const SELECT_TYPE = "selectBaseType"
const SELECT_DELIVERY = "selectDeliveryType"
const SELECT_ASSEMBLAGE = "selectAssemblageType"

export const selectBaseType = (isBase) => ({type: SELECT_TYPE, isBase: isBase})
export const selectDeliveryType = (IsOurDelivery) => ({type: SELECT_DELIVERY, isOurDelivery: IsOurDelivery})
export const selectAssemblageType = (isOurAssemblage) => ({type: SELECT_ASSEMBLAGE, isOurAssemblage: isOurAssemblage})