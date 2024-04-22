const loginForm = document.querySelector(".login-form");

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

const passwordInput = loginForm.elements[1];

function placeholderActive() {
passwordInput.setAttribute('placeholder', 'Type area');  
}

function placeholderOff() {
passwordInput.setAttribute('placeholder', '');  
}

loginForm.addEventListener("submit", funEvent)
passwordInput.addEventListener("click", placeholderActive);
passwordInput.addEventListener("blur", placeholderOff);
