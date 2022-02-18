import {Field, reduxForm} from "redux-form";
import React from "react";

let ClimbingTypeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="climbingType" component="select">
                    <option value = "ms_26_h" >МОДЕЛЬ МС-26-Н</option>
                    <option value="ms_18_h">МОДЕЛЬ МС-18-Н</option>
                    <option value="ms_09">МОДЕЛЬ МС-09</option>
                    <option value="ms_18">МОДЕЛЬ МС-18</option>
                    <option value="ms_26">МОДЕЛЬ МС-26</option>
                    <option value="ms_42">МОДЕЛЬ МС-42</option>
                    <option value="ms_80">МОДЕЛЬ МС-80</option>
                    <option value="sorel_mps_7">МОБИЛЬНЫЙ СКАЛОДРОМ SOREL НА АВТОПРИЦЕПЕ МПС-7,5</option>
                    <option value="sorel_mps_8">МОБИЛЬНЫЙ СКАЛОДРОМ SOREL НА АВТОПРИЦЕПЕ МПС-8</option>
                    <option value="sorel_mps_10">МОБИЛЬНЫЙ СКАЛОДРОМ SOREL НА АВТОПРИЦЕПЕ МПС-10</option>
                </Field>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'climbingType'})(ClimbingTypeForm)

const ClimbingType = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Модель скалодрома</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default ClimbingType
