import React from "react"
import SearchBar from "./SearchBar"
import Icons from "./Icons"
import Profile from "./Profile"

function Header()
{
    return(
        <div className = "HeaderMain">
            <SearchBar />
            <Icons />
            <Profile />
        </div>
    )
}

export default Header