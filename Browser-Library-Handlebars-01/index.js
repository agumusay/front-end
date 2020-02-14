let output = document.getElementById("card-template").innerHTML;
let template = Handlebars.compile(output);
let outputData = template({
  firstName: "Alisan",
  lastName: "Gumusay",
  jobTitle: "Tutor",
  startDate: "2020",
  birthday: "15.05.1986",
  manager: {
    firstName: "Tony",
    lastName: "Stark"
  }
});

document.getElementById("output").innerHTML += outputData;
