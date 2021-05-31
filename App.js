import React from "react"
import Navbar from "./Components/Navbar/Navbar.js"
import Header from "./Components/Header/Header.js"
import MainContent from "./Components/MainContent/MainContent.js"

function App()
{
    return(
        <div className = "App">
                <Navbar />
                <div className = "content">
                    <Header />
                    <MainContent/>                
                </div>
        </div>
    )
}

export default App