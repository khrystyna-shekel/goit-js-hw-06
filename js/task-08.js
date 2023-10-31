const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

function getValueOfInput() {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');

    if (inputEmail.value === "" || inputPassword.value === "") {
        alert('Усі поля мають бути заповнені!');
        return null;
    };
    return {
        email: inputEmail.value,
        password: inputPassword.value
    };
}
    const userDate = getValueOfInput();

    if (userDate !== null) {
        console.log(userDate);    
        loginForm.reset();
    };
});



