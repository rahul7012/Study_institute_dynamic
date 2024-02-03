const login =()=>{
    if (userl.value==="" || passl.value===""){
        alert("fill form completely")
    }
    else{
        user=userl.value
        localStorage.setItem("user",user)
        window.location="dashboard.html"

    }
}
const tosignup=()=>{
    window.location="signup.html"
}


const signup=()=>{
    window.location="signup.html"
}