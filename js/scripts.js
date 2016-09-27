/* Backend ---------------*/
var original = ["food", "color", "flower", "cheese"];
var newArray = [];




/* Frontend ----------------*/
$(function(){
  $("#input form").submit(function(event) {
    original.forEach(function(element) {
      var userInput = $("input#" + element).val();
      newArray.push(userInput);
      $("." + element).text(userInput);
    });
    var thirdArray = [newArray[0], newArray[2], newArray[1]];
    thirdArray.forEach(function(element){
      $("#list").append(element);
    });
    $("#list").show();

    event.preventDefault();

  });
});
