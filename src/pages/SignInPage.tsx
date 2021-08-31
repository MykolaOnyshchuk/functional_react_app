import React, {Component} from "react";
import "./SignInPage.css";

function SignInPage() {
    function sendData () {
        let emailObj = document.getElementById("emailInput") as HTMLInputElement;
        let email = emailObj.value;
        let passObj = document.getElementById("passwordInput") as HTMLInputElement;
        let pass = passObj.value;
        let loginObject = JSON.parse(window.localStorage.getItem("hackademy") as string);////
        let loggedIn = false;
        if (loginObject === null) {
            window.localStorage.setItem("hackademy", JSON.stringify({
                email: email,
                password: pass,
            }))
            loggedIn = true;
        }
        else if (loginObject.password === pass) {
            loggedIn = true;
        }
    }


    let obj = window.localStorage.getItem("hackademy");
    if (obj === null) {
        return (
            <div id="signin-background">
                <p id="signInHeader">Sign In</p>
                <div id="emailInputWrap">
                    <input id="emailInput" type="email" placeholder="Type in your email . . ."></input>
                </div>
                <div id="passwordInputWrap">
                    <input id="passwordInput" type="password" placeholder="Type in your password . . ."></input>
                </div>
                <button id="signIn" onClick={() => sendData()}>Sign In</button>
            </div>
        );
    } else {
        return (
            <h1 id="noDisplay">You are already logged in</h1>
        );
    }
}

export default SignInPage;