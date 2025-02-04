
document.getElementById('submit').addEventListener('click', (event) => {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    
    const password = passwordField.value.trim();
    const confirmPassword = confirmPasswordField.value.trim();
  

    passwordField.classList.remove('error','success');
    confirmPasswordField.classList.remove('error','success');

    if (password !== confirmPassword) {
        passwordField.classList.add('error');
        confirmPasswordField.classList.add('error');
        console.log('error');
    } else {
        passwordField.classList.remove('error');
    confirmPasswordField.classList.remove('error');
        passwordField.classList.add('success');
        confirmPasswordField.classList.add('success');
        console.log('fertig');
    }
});