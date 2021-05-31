import React from "react"
import Info from "./Info"

function TableComponent()
{
    return(
        <div className = "TableComponent">
            <div>
                M063592DR2
            </div>
            <div>
                08.04.2021
            </div>
            <div>
                Code 5928MD01
            </div>
            <div>
                <Info text = "completed"/>
            </div>
            <div>
                $2500.00
            </div>
        </div>        
    )
}
export default TableComponent