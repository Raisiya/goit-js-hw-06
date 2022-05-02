const refs = {
formInput: document.querySelector("#validation-input"),
};

refs.formInput.addEventListener("blur", (event) => {
if (event.currentTarget.value.length > refs.formInput.dataset.length ||
    event.currentTarget.value.length < refs.formInput.dataset.length) {
    return refs.formInput.classList.add("invalid");
    }
    return refs.formInput.classList.replace("invalid", "valid");
});


