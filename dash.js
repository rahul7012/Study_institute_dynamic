if(localStorage.getItem("user")){
    namehead.innerHTML =localStorage.getItem("user")
    }
    else{
        alert("please login")
        window.location="login.html"
    }
    if (localStorage.getItem("user")) {
        dashid.innerHTML=localStorage.getItem("user")
    }

    if (localStorage.getItem("name")){
        dashname.innerHTML=localStorage.getItem("name")
    }

    if (localStorage.getItem("mail")){
        dashmail.innerHTML=localStorage.getItem("mail")
    }

    if (localStorage.getItem("pno")){
        dashpno.innerHTML=localStorage.getItem("pno")
    }
    
    

 const logout=()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("name")
    localStorage.removeItem("mail")
    localStorage.removeItem("pno")
    window.location="index.html"
 }