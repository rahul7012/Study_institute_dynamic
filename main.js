const validate = () => {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (newsletter.value === "") {
        alert('Please provide mail');
    }
    else if(!emailRegex.test(newsletter.value)){
        alert('please provide a valid email')
    }
    else{
        newsletterval.innerHTML="Email successfully registered"
        newsletterval.style.color="red"
        newsletter.value=""
    }
}

const login =() =>{
    window.location="login.html"
}

const signup=()=>{
    window.location="signup.html"
}