let input = document.getElementById("password")
let eye = document.getElementById("eye")
let visibility = true
eye.addEventListener("click",()=>{
    if(visibility){
        input.type="text"
        visibility = false
    }
    else{
        input.type="password"
        visibility=true
    }
})

let form = document.querySelector("form")
form.addEventListener(("submit"),(e)=>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let login_id = localStorage.getItem("username")
    let login_password = localStorage.getItem("password")
    if(login_id==username && login_password==password){
        alert("Sucessfully Logged-In")
        open("Home1.html","_self")
    }
    else{
        alert("Invalid Username or Password")
    }
})