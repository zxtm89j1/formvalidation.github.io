let username = document.getElementById("input-login-username");
let password = document.getElementById("input-login-password");
let form = document.getElementById("form");
let errorUsername = document.getElementById('error-username');
let errorPassword = document.getElementById('error-password');


validate = () => {
    if (username.value.trim() == '' && password.value.trim() == '') {
        errorUsername.innerHTML = 'Please enter a valid username!';
        errorPassword.innerHTML = 'Please enter a valid password!'
    } 
    
    else if (username.value.trim() == '') {
        errorUsername.innerHTML = 'Please enter a valid username!';
    }
   
    else if (password.value.trim() == '') {
        errorPassword.innerHTML = 'Please enter a valid password!';
    }
    
    else {
        window.location.href = 'form.html'
    }
};


form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
});
