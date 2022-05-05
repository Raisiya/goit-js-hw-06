const form = document.querySelector(".login-form");

form.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  
  if(mail === "" || password === "") {
   return alert("Please fill in all the fields!");
  }
  const formData = new formData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`onHandleSubmit -> value`, value);
    console.log(`onHandleSubmit -> name`, name);

    form.reset();
  });
 
}




  

