// Adds burger to "eaten" list by clicking the "eat me" button
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("isdevoured");
    var devouredState = {
      devoured: isDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed burger to", isDevoured);
        location.reload();
      }
    );
  });

// Makes "add burger" button functional
  $(".add-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
