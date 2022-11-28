document.querySelector("h1").textContent =
  person.firstname + " " + person.lastname;

document.querySelector(".img-profile").setAttribute("src", person.image);
document.querySelector(".img-profile").setAttribute("alt", person.firstname);

document.querySelector("#address").textContent = person.address;
document.querySelector("#phone").textContent = person.phone;
document.querySelector("#email").setAttribute("href", person.email);
document.querySelector("#email").textContent = person.email;

document.querySelector("#linkedin").setAttribute("href", person.linkedin);
document.querySelector("#facebook").setAttribute("href", person.facebook);
document.querySelector("#twitter").setAttribute("href", person.twitter);
document.querySelector("#github").setAttribute("href", person.github);

for (var job of person.jobs) {

  var job_container = `
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">${job.Empresa}</h3>
        <div class="subheading mb-3">${job.Cargo}</div>
        
      </div>
    
    </div>
`;

  document
    .querySelector("#jobs-container")
    .insertAdjacentHTML("beforeend", job_container);
}

for (var edu of person.education) {
  var education_container = `
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">${edu.Estudio}</h3>
        <div class="subheading mb-3">${edu.course}</div>
        
      </div>
      
    </div>`;
  document
    .querySelector("#educations-container")
    .insertAdjacentHTML("beforeend", education_container);
}
