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
form.addEventListener("submit",(e)=>{
    // e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(username!=password){
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    alert("Succesfully Registered :)")
    }
    else
    alert("Username and Password must be different")
})