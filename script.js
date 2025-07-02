const form = document.getElementById("form")
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeatpassword_input = document.getElementById('repeatpassword-input');

form.addEventListener('submit', (e) => {
    //e.preventDefault() Prevents Submit

    let errors = []

    if (firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeatpassword_input.value)
    }
    else {
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if (errors.length > 0) {
        e.preventDefault()
        document.getElementById("errors").innerText = errors
    }
    
})

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = []

    if (password !== repeatPassword) {
        errors.push('Password does not match repeated password!')

    }
    return errors;
}