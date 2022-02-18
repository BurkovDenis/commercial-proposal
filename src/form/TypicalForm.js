import {Field, reduxForm} from "redux-form";
import React from "react";

let TypicalForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"isBase"} type={"checkbox"}/> Типовой скалодром
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'typical'})(TypicalForm)

const Typical = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h4></h4>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Typical
