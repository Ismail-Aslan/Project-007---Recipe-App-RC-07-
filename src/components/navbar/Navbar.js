import React from 'react'
import "./style.css"

export default function Navbar() {
    return (
       
            <div className="navbar-container">
                <a className="left-nav nav-element" href="/"><h2>👩‍🍳Delicious Recipe👩‍🍳</h2></a>
                <div className="right-nav  nav-element">
                    <a className="right-nav-element" href="/about">ABOUT</a>
                    <a className="right-nav-element" href="https://github.com/Ismail-Aslan/Project-007---Recipe-App-RC-07-">GITHUB</a>
                    <a className="right-nav-element" href="/login">LOGOUT</a>
                </div>
            </div>
       
    )
}
