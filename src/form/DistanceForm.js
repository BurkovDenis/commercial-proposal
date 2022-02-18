import {Field, reduxForm} from "redux-form";
import React from "react";

let DistanceForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Расстояние до объекта, км"} name={"distance"} component={"input"}/>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'distance'})(DistanceForm)

const Distance = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h4></h4>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Distance
