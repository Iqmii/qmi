document.getElementById('registerForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = document.getElementById('registerForm');
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData.entries());

  try {
    console.log('1');
    // Викликаємо fetch з await, без .then()
    const response = await fetch("https://dry-harbor-60625-d55a7f8bee92.herokuapp.com/auth/verificationCode", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
.then(data => {
  if (data.redirectUrl) {
    sessionStorage.setItem('registrationSuccess', 'true');
    window.location.href = '/main';
    console.log('registrationCode, str. 22')
  }
})
  } catch (err) {
    console.error("Помилка в try:", err);
  }
});
console.log('29 registr')




