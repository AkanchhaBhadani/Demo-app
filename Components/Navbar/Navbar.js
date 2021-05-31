import React from "react"
import Header from "./Header"
import MainNav from "./MainNav"
import Secondary from "./Secondary"
import Extra from "./Extra"

function Navbar()
{
    return(
        <div className = "Navbar">
            <Header/>
            <MainNav />
            <Secondary />
            <Extra />
        </div>
    )
}
export default Navbar