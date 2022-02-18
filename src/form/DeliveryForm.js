import {Field, reduxForm} from "redux-form";
import React from "react";

let DeliveryForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"isOurdelivery"} type={"checkbox"}/> Доставка силами нашей компании
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'delivery'})(DeliveryForm)

const Delivery = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Параметры доставки</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Delivery
