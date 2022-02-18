import {Field, reduxForm} from "redux-form";
import React from "react";

let ClimbingWallForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Лазательная площадь"} name={"surface"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Высота конструкции"} name={"height"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Общая ширина конструкции"} name={"width"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Максимальное отклонение"} name={"deviation"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Вес конструкции"} name={"weight"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Количество одновременно занимающихся"} name={"workinCount"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Место установки"} name={"plase"} component={"input"}/>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'climbingWall'})(ClimbingWallForm)

const ClimbingWall = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Параметры скалодрома</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default ClimbingWall
