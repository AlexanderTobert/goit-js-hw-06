const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Необходимо заполнить все поля!");
        return;
    } 
    const userData = {
        email: email.value,
        password: password.value
    }

    console.log(userData);
    event.currentTarget.reset();
})
