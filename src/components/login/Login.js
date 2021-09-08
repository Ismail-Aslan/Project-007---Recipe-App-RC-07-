import "./style.css";
import React from 'react'
import meal2 from "./../../assets/meal2.svg"
export default function Login() {
    return (
        <div className="login-main-container">
            <div className="login-center-container">
                <img id="login-logo" src={meal2} alt="" />
                <h2>👩‍🍳Delicious Recipe👩‍🍳</h2>
                <form id="login-form" action="" method="get">
                    <input className="login-input" type="text" name="Username" id="Username" placeholder="Username"/>
                    <br />
                    <input className="login-input" type="password" name="password" id="password" placeholder="Password"/>
                    <br />
                    <input className="login-input" type="submit" value="LOGIN" />
                </form>
            </div>
        </div>
    )
}
