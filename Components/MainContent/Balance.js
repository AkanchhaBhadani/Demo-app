import React from "react"
import Text from "./Text"
import Info from "./Info"

function Balance()
{
    return(
        <div className = "Balance">
        <Text text = "Balance" />
        <div className = "BalanceDiv2">
            <div className = "Earnings">
                <p>Earnings</p>
                <div className="styleNumber">
                 $43.41%
                <Info text = "+2.5%"/>
                </div>
                </div>
            <div className = "SalesValue">
                <p>Sales Value </p>
                <div className= "styleNumber" >
                $95,422
                <Info text = "+13.5%"/>
                </div>
                </div>
        </div>
        </div>
    )
}
export default Balance