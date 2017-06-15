//numbers

//back-end
var countTo = prompt("countBy");
var countBy = prompt("CountTo");
var inputFields = [countBy, countTo];
var output = [];
var iteration = countTo/countBy;

for (var index = 1; index <= iteration; index += 1) {
output.push(index * countBy);
  }
//alert(output);
//front-end
$(document).ready(function() {
  $("button").click(function(event) {
    if (countTo === "") {
         alert ("Fill all fields before submitting.")
       } else if (isNaN(countTo)) {
         alert ("Entries must be a integer.")
       } else if (countTo < 0) {
         alert("Entries must be a positive integer.")
       } else if (countBy > countTo) {
         alert("Count to value exceeds Count by value, try harder.")
       } else {
         alert("SUCCESS mother f*!k?r!" + output)
       }
    event.preventDefault();
  });
});
