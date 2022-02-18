import {Field, reduxForm} from "redux-form";
import React from "react";

let AssemblageCostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Цена авиабилета"} name={"airCost"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Количество человек на монтаже"} name={"peopleCount"} component={"input"}/>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'assemblageCost'})(AssemblageCostForm)

const AssemblageCost = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1></h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default AssemblageCost
