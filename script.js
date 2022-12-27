function comparePasswords(password, confirmPassword){

    console.log(password);
    console.log(confirmPassword);

    if(password !== confirmPassword || password === ""){
       document.getElementById("errorText").innerText = "Passwords do not match. Please verify and try again.";
       document.getElementById("errorText").style.color = "#FF0000";
    }  
    else {
        document.getElementById("errorText").innerText = " ";
        document.getElementById("errorText").style.color = "#FF0000";
    }
}