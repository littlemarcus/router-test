import React from "react"
import { Router } from "@reach/router"
import Apple from "../../pages/apple"
import Default from "../../pages/default"

const WowPage = () => {
    return (
            <Router basepath="/wow"> 
                <Apple path="/apple" />
                <Default path="/" />
            </Router>
    )
}

export default WowPage