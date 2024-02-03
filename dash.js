if(localStorage.getItem("user")){
    namehead.innerHTML =localStorage.getItem("user")
    }
    else{
        alert("please login")
        window.location="login.html"
    }
    dashid.innerHTML=localStorage.getItem("user")
    dashname.innerHTML=localStorage.getItem("name")
    dashemail.innerHTML=localStorage.getItem("mail")
    dashpno.innerHTML=localStorage.getItem("pno")

 const logout=()=>{
    localStorage.removeItem("user")
    window.location="index.html"
 }