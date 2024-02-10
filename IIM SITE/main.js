document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mon-slider", {
      // Optional parameters
      loop: true,
  
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      autoplay: {
        delay: 5000,
      },
    });
  });
  
//TABS//

document.querySelectorAll('.tabs .tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tabs .tab').forEach(tab => {
      tab.classList.remove('tab-active');
    });
    document.querySelectorAll('.contents .content').forEach(content => {
      content.classList.remove('active');
    });
    this.classList.add('tab-active');
    if (this.classList.contains('tab-cdi')) {
      document.querySelector('.contents .content-cdi').classList.add('active');
    } else if (this.classList.contains('tab-cd')) {
      document.querySelector('.contents .content-cd').classList.add('active');
    } else if (this.classList.contains('tab-cdeb')) {
      document.querySelector('.contents .content-cdeb').classList.add('active');
    } else if (this.classList.contains('tab-3d')) {
      document.querySelector('.contents .content-3d').classList.add('active');
    } else if (this.classList.contains('tab-jv')) {
      document.querySelector('.contents .content-jv').classList.add('active');
    }
  });

  //DARK//

  const toggleModeButton = document.querySelector('.toggle-mode');

  toggleModeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark');
  });
});


//Nous Contacter//

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errorContainer = document.querySelector(".message-error");
    let errorList = document.querySelector(".message-error ul");

    errorList.innerHTML = "";
    errorContainer.classList.remove("visible");

    let requiredFields = ["nom", "prenom", "email", "axe"];

    let success = true;

    requiredFields.forEach(fieldId => {
        let field = document.querySelector(`#${fieldId}`);
        if (field.value.trim() === "") {
            errorContainer.classList.add("visible");
            success = false;

            let err = document.createElement("li");
            err.innerText = `Le champ ${fieldId} ne doit pas être vide`;
            errorList.appendChild(err);
        }
    });

    if (success) {
        let successContainer = document.querySelector('.message-success');
        successContainer.classList.add('visible');
    }
});



