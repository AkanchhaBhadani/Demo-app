import React from "react"
import Text from "./Text"
import Info from "./Info"

function NewUsers()
{
    return(
        <div className = "NewUsers">
        <Text text= "New Users" />
        <div className = "styleNumber">
        94.2%
        <Info text = "+6.9%"/>
        </div>
        </div>
    )
}
export default NewUsers