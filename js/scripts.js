$(function() {
 $("#madLib").submit(function(event) {
   var firstName = $("input#firstName").val();
   var lastName = $("input#lastName").val();
   var fullName = firstName.concat(lastName);
   var capName = fullName.toUpperCase();

   $(".fullName").append(capName);
   $(".lastName").append(lastName);

   $("#story").show();

   event.preventDefault();
 });
});
