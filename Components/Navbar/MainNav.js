import React from "react"
import Option from "./Option"

function MainNav()
{
    return(
        <div>
            <p className = "Section">MAIN</p>
            <Option 
            name = "Dashboard"
            />
            <Option 
            name = "Discover"
            />
            <Option 
            name = "Users"
            />
            <Option 
            name = "Documents"
            />
            <Option 
            name = "Applications"
            />
        </div>
    )
}

export default MainNav