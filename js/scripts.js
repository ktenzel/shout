$(function() {
 $("#madLib").submit(function(event) {
   var firstName = $("input#firstName").val();
   var lastName = $("input#lastName").val();
   var verb = $("input#verb").val();
   var noun = $("input#noun").val();
   var city = $("input#city").val();

   $(".firstName").append(firstName);
   $(".lastName").append(lastName);
   $(".verb").append(verb);
   $(".noun").append(noun);
   $(".city").append(city);

   $("#story").show();

   event.preventDefault();
 });
});
