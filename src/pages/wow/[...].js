import React from "react"
import { Router } from "@reach/router"
import Apple from "../apple"
import { Link } from "gatsby"

const WowPage = () => {
    return (
        <div>
            <h1>Default</h1>
            <Link to="/apple">Apple!</Link>
            <Router basepath="/wow"> 
                <Apple path="/apple" />
            </Router>
        </div>
    )
}

export default WowPage