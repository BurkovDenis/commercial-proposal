import React from 'react'
import AssemblageCostForm from "../form/AssemblageCostForm";

class Asseblage extends React.Component{

    render() {

        let selectAssemblage = () => {
            this.props.selectAssemblageType(this.props.isOurAssemblage)
        }

        return (
            <div>
                <h1>Данные по монтажу</h1>
                <input type={"checkbox"} id="assChk" onChange={selectAssemblage.bind(this)}/><label htmlFor="assChk">Монтаж силами нашей компании</label>
                {
                    this.props.isOurAssemblage ?
                        <AssemblageCostForm/> : <div/>
                }
            </div>
        );
    }
}

export default Asseblage