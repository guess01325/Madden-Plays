import React from "react"
import Footer from "./Footer"
import Header from "./Header"
// import "../css/Layout.css"


  

export default function Layout(props) {
    return(
        <div>
            <Header/>
            {props.children}
        <Footer ClassName="footer" />
        </div>
    )
}