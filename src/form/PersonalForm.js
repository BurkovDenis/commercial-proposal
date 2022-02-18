import {Field, reduxForm} from "redux-form";
import React from "react";

let PersonalForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Компания"} name={"company"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Фамилия"} name={"lastName"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Имя"} name={"firstName"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Отчество"} name={"secondName"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Телефон"} name={"phone"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Почта"} name={"email"} component={"input"}/>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'personal'})(PersonalForm)

const Personal = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Данные клиента</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Personal
