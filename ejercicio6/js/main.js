document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("a.toggle-link");


  function toggleSection(event) {
    event.preventDefault();


    const link = event.target;
    const section = link.previousElementSibling;


    if (section.style.display === "none") {
      section.style.display = "block";
      link.textContent = "Ocultar contenidos";
    } else {
      section.style.display = "none";
      link.textContent = "Mostrar contenidos";
    }
  }


  links.forEach(link => {
    link.addEventListener("click", toggleSection);
  });
});
