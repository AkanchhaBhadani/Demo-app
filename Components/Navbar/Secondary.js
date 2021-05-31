import React from "react"
import Option from "./Option"

function Secondary()
{
    return(
        <div>
            <p className = "Section">SECONDARY</p>
            <Option 
            name = "Support Center"
            />
            <Option 
            name = "Inbox"
            />
            <Option 
            name = "File Manager"
            />
            <Option 
            name = "Data List"
            />
        </div>
    )
}

export default Secondary