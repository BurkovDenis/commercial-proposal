import {Field, reduxForm} from "redux-form";
import React from "react";
import PersonalForm from "./form/PersonalForm";
import ClimbingWallForm from "./form/ClimbingWallForm";
import ConstructionTypeForm from "./form/ConstructionTypeForm";
import Typical from "./form/TypicalForm";
import DeliveryForm from "./form/DeliveryForm";
import ClimbingTypeForm from "./form/ClimbingTypeForm";
import DistanceForm from "./form/DistanceForm";
import DeliveryCostForm from "./form/DeliveryCostForm";
import AssemblageCostForm from "./form/AssemblageCostForm";
import AssemblageForm from "./form/AssemblageForm";

let App = () => {
    return (
        <div>
            <PersonalForm/>
            <ConstructionTypeForm/>
            <Typical/>
            <ClimbingTypeForm/>
            <ClimbingWallForm/>
            <DeliveryForm/>
            <DistanceForm/>
            <DeliveryCostForm/>
            <AssemblageForm/>
            <AssemblageCostForm/>
        </div>
    )

}

export default App
