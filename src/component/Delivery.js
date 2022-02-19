import React from 'react'
import DistanceForm from "../form/DistanceForm";
import DeliveryCostForm from "../form/DeliveryCostForm";

class Delivery extends React.Component{

    render() {

        let selectDelivery = () => {
            this.props.selectDeliveryType(this.props.isOurDelivery)
        }

        return (
            <div>
                <h1>Параметры доставки</h1>
                <input type={"checkbox"} id="delChk" onChange={selectDelivery.bind(this)}/><label htmlFor="delChk">Доставка силами нашей компании</label>
                {
                    this.props.isOurDelivery ?
                        <DistanceForm/> : <DeliveryCostForm/>
                }
            </div>
        );
    }
}

export default Delivery