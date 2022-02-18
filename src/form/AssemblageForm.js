import {Field, reduxForm} from "redux-form";
import React from "react";

let AssemblageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"isOurAssemblage"} type={"checkbox"}/> Нужен монтаж
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'assemblage'})(AssemblageForm)

const Assemblage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Данные по монтажу</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Assemblage
