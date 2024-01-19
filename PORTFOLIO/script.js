let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

cvBtn.addEventListener("click", function () {
  alert("CV is downloaded successfully!");
});

submit.addEventListener("click", function () {
  let names = document.getElementById("names");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  if (names.value == "" && email.value == "" && phone.value == "") {
    alert("Please fill the details");
  } else {
    alert("Message has been Sent Successfully!");
  }
});

let ul = document.querySelector("ul");
bar.addEventListener("click", function () {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    bar.className = "fa-solid fa-xmark";
  } else {
    bar.className = "fa-solid fa-bars";
  }
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var pdfPath = "SHUBHAM RAJ_CV.pdf";

    // Create an anchor element
    var link = document.createElement("a");
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "SHUBHAM RAJ_CV.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link element
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  });
