const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const submitError = document.getElementById('submit-error');


function validateName(){
    const name = document.getElementById('name').value;
    // console.log('name', name);

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name.innerHTML = 'Write Your Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}


function validateEmail(){
    const email = document.getElementById('email').value;
    console.log('email', email);

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        email.innerHTML = 'Please Provide Valid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}


function validatePassword(){
    const password = document.getElementById('password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if(password.length < 8){
        password.innerHTML = 'Password length must be 8 long Characters';
        return false;
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)){
        password.innerHTML = 'Please provide strong password, your password is weak';
        return false;
    }
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}

function validateConfirmPassword(){
    const confirm_password = document.getElementById('confirm_password').value;

    if(confirm_password.length == 0){
        confirmPasswordError.innerHTML = 'confirm_password is required';
        return false;
    }
    if(confirm_password.length < 8){
        confirm_password.innerHTML = 'confirm_password length must be 8 long Characters';
        return false;
    }
    if(!confirm_password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)){
        confirm_password.innerHTML = 'Please provide strong confirm_password, your confirm_password is weak';
        return false;
    }
    confirmPasswordError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}































