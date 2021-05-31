import React from "react"
import Text from "./Text"
import Info from "./Info"

function TotalIncome()
{
    return(
        <div className = "TotalIncome">
        <Text text = "Total Income"/>
        <div className = "styleNumber">
        $124,563.00
        <Info text = "+6.9%"/>
        </div>
        <div style={{borderTop: "solid", borderWeight: "1px", borderColor: "darkviolet", width: "15rem", marginLeft: "1rem"}}>
        <Text text = "Yearly Income"/>
        </div>
        </div>
    )
}
export default TotalIncome