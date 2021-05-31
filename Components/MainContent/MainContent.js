import React from "react"
import TotalIncome from "./TotalIncome"
import NewUsers from "./NewUsers"
import Balance from "./Balance"
import RecentTransactions from "./RecentTransactions"

function MainContent()
{
    return(
        <div className = "MainContent">
            <div className= "Box1">
                <div className = "Subdiv1">
                    <TotalIncome/>
                    <NewUsers />
                </div>
                <Balance />
            </div>
            <div className = "Box2">
                <RecentTransactions/>
            </div>
        </div>
    )
}

export default MainContent