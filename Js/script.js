let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
  let myForm = document.getElementById('inputEmail4');
  let myRegex = /^[a-zA-Z-\s]+$/;

  if (myInput.value.trim() == "") {
    let myError = document.getElementById('error');
    myError.innerHTML = "Le champs nom est requis.";
    myError.style.color = 'red';
    e.preventDefault();
  } else if (myRegex.test(myInput.value) == false) {
    let myError = document.getElementById('error');
    myError.innerHTML = "Le nom doit comporter des lettres, des tirets uniquement";
    myError.style.color = 'red';
    e.preventDefault();
  }

});


