import React from 'react'
import ClimbingTypeForm from "../form/ClimbingTypeForm";
import ClimbingWallForm from "../form/ClimbingWallForm";

class Typical extends React.Component{

    render() {

        let selectBaseType = () => {
            this.props.selectBaseType(this.props.isBase)
        }

        return (
            <div>
            <input type={"checkbox"} id="typChk" onChange={selectBaseType.bind(this)}/><label htmlFor="typChk">Типовой скалодром</label>
                {
                    this.props.isBase ?
                    <ClimbingTypeForm/> : <ClimbingWallForm/>
                }
            </div>
        );
    }
}

export default Typical