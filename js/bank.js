// login funcion
document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // adding condition
    if(userEmail == 'bank@gmail.com' && userPassword == 'bank123'){
        window.location.href = 'banking.html';
    }
})