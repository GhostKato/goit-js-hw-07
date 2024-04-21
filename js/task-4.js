const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", funEvent)

function funEvent(event) {
    event.preventDefault();

    const formElem = event.currentTarget.elements;

    const formObj = {
        email: formElem.email.value.trim(),
        password: formElem.password.value.trim(),
    };
    
    if (formObj.email && formObj.password) {
        console.log(formObj);
        
        loginForm.reset();
    }
    else {
        alert("All form fields must be filled in");        
    }
}
