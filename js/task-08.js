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
  const formData = new formData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`onHandleSubmit -> value`, value);
    console.log(`onHandleSubmit -> name`, name);

    form.reset();
  });
 
}




  

