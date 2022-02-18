import {Field, reduxForm} from "redux-form";
import React from "react";

let ConstructionType = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="constructionType" component="select">
                    <option value = "inRoom" >Конструкции модульного скалодрома для монтажа в помещении</option>
                    <option value="inStreet">Конструкции модульного скалодрома для монтажа на улицы</option>
                    <option value="relax">Релаксационная стенка</option>
                    <option value="portable">Мобильный скалодром</option>
                    <option value="boulder">Стена для боулдеринга</option>
                </Field>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'constructionType'})(ConstructionType)

const Construction = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Тип конструкции</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Construction
