const signup = () => {
    let inputs = document.getElementsByClassName("inputs");
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === "") {
            alert("fill the form completely");
            return; 
        }
    }
    nameu=name1.value
    localStorage.setItem("name",nameu)

    user=userid.value
    localStorage.setItem("user",user)

    mail=em.value
    localStorage.setItem("mail",mail)
    
    pno=pno.value
    localStorage.setItem("pno",pno)
    window.location="dashboard.html"
    
}

const tologin =()=>{
    window.location="login.html"
}

