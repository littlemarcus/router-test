import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const Pear = () => {
    return <h1>Pear 🍐</h1>
}

const WowPage = () => {
    return (
        <div>
            <h1>Default</h1>
            <Link to="/wow/pear">Pear!</Link>
            <Router basepath="/wow"> 
                <Pear path="/pear" />
            </Router>
        </div>
    )
}

export default WowPage