const form = document.querySelector(".login-form");

form.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();

    const {
    elements: { email, password },
    } = event.currentTarget;
  
  if(email.value === "" || password.value === "") {
   return alert("Please fill in all the fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}




  

