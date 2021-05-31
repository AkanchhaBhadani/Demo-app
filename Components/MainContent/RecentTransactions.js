import React from "react"
import Text from "./Text"
import TableComponent from './TableComponent'
import Info from "./Info"
function RecentTransactions()
{
    return(
        <div className = "RecentTransactions">
        <div style = {{display: "flex", justifyContent: "space-between"}}><Text text = "Recent Transactions" />
        <div className = "Info" style={{borderRadius:"2px", backgroundColor:"purple", margin: "1rem",marginBottom: "0.5rem", fontSize: "0.8rem", paddingBottom: "0.5rem" }}>Export</div>
        </div>
        <div className= "TableHead">
        <div className= "HeaderName"><Text text = "Incoming"/></div>
        <div className= "HeaderName"><Text text = "Invoices"/></div>
        </div>
        <div className= "TableHead2">
         <div>
                Invoice ID
            </div>
            <div>
                Date
            </div>
            <div>
                Description
            </div>
            <div>
                Status
            </div>
            <div>
                Descriptions
            </div>
        </div>
        <div style= {{backgroundColor: "beige"}}><TableComponent /></div>
        <TableComponent />
        <div style= {{backgroundColor: "beige"}}><TableComponent /></div>
        <TableComponent />
        <div style= {{backgroundColor: "beige"}}><TableComponent /></div>
        <TableComponent />
        </div> 
    )
}
export default RecentTransactions