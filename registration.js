document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const form = document.getElementById('registerForm');
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
   
    let response; // Оголошуємо response поза try
    
    try {
      console.log('1');
      response = await fetch("https://dry-harbor-60625-d55a7f8bee92.herokuapp.com/auth/registration", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      window.location.href = '/registration/registrationCode/registrationCode.html';
    } catch (err) {
      console.error("Помилка в try:", err);
      return; // Можна завершити функцію, якщо fetch не спрацював
    }
    
    
   
  });
  
  /*  const result = await response.json();
  
  http://16.171.233.7:4009/auth/registration
  http://localhost:5001/auth/registration
  
  
  console.log("JSON-дані:", result);
  console.log('0'); */