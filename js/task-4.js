const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value.trim();
  });

  if (Object.values(formObject).includes("")) {
    alert("All form fields must be filled in");
  } else {

    console.log(formObject);

    form.reset();
  }
});
