import React from "react";
import PersonalForm from "./form/PersonalForm";
import ConstructionTypeForm from "./form/ConstructionTypeForm";
import TypicalContainer from "./component/container/TypicalContainer";
import DeliveryContainer from "./component/container/DeliveryContainer";
import AssemblageContainer from "./component/container/AssemblageContainer";

let App = () => {
    return (
        <div>
            <PersonalForm/>
            <ConstructionTypeForm/>
            <TypicalContainer/>
            <DeliveryContainer/>
            <AssemblageContainer/>
            <button>Сформировать коммерческое предложение</button>
        </div>
    )

}

export default App
