import React from "react"

function Password() {

    return (
        <div className = "passwordContainer">
            <div className = "generatepasswordDiv">
                <button className = "passwordButton" onClick = {genPassword}>Generate password</button>
            </div>
            <div className = "generatedPasswordsDiv">
                <div className = "pass" >
                    <p id = "pass1"></p>
                </div>
                <div className = "pass">
                    <p id = "pass2"></p>
                </div>
                <div className = "pass">
                    <p id = "pass3"></p>
                </div>
            </div>
        </div>
        
    )
}

function genPassword() {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var passwordLength = 10;
    document.getElementsByClassName("generatedPasswordsDiv")[0].style.visibility = "visible"
    for (var i = 0; i < 3; i++) {
        var password = "";
        for (var j = 0; j <= passwordLength; j++) {
            var random = Math.floor(Math.random() * chars.length);
            password += chars.substring(random, random +1);
        }
        var id = String("pass"+(i+1));
        document.getElementById(id).innerText = password;
    }
}


export default Password