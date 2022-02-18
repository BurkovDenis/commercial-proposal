import {Field, reduxForm} from "redux-form";
import React from "react";

let DeliveryCostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Стоимость доставки"} name={"deliveryCost"} component={"input"}/>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'deliveryCost'})(DeliveryCostForm)

const DeliveryCost = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h4></h4>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default DeliveryCost
