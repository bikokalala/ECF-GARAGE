// let myForm = document.getElementById('myForm');

// myForm.addEventListener('submit', function(e) {
//   let myForm = document.getElementById('inputEmail4');
//   let myRegex = /^[a-zA-Z-\s]+$/;

//   if (myInput.value.trim() == "") {
//     let myError = document.getElementById('error');
//     myError.innerHTML = "Le champs nom est requis.";
//     myError.style.color = 'red';
//     e.preventDefault();
//   } else if (myRegex.test(myInput.value) == false) {
//     let myError = document.getElementById('error');
//     myError.innerHTML = "Le nom doit comporter des lettres, des tirets uniquement";
//     myError.style.color = 'red';
//     e.preventDefault();
//   }

// });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêcher l'envoi par défaut du formulaire

      // Récupérer les valeurs des champs
      const selectValue = document.getElementById('inputState').value;
      const nomValue = document.getElementById('inputEmail4').value;
      const motDePasseValue = document.getElementById('inputPassword4').value;
      const sujetValue = document.getElementById('inputAddress').value;
      const emailValue = document.getElementById('inputAddress2').value;
      const checkBoxChecked = document.getElementById('gridCheck').checked;

      // Vérification des champs requis
      if (selectValue.trim() === '' || nomValue.trim() === '' || motDePasseValue.trim() === '' || sujetValue.trim() === '' || emailValue.trim() === '' || !checkBoxChecked) {
          alert('Veuillez remplir tous les champs et accepter la politique de confidentialité.');
          return;
      }

      // Envoi du formulaire (vous pouvez remplacer cette étape par une requête AJAX si nécessaire)
      alert('Formulaire soumis avec succès !');

      // Réinitialiser le formulaire après soumission
      form.reset();
  });
});

