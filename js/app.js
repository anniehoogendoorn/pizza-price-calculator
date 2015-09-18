$(document).ready(function() {

  $("form#order-form").submit(function(event) {
    var quantity = $("input#quantity").val();
    var topping = $("select#topping").val();
    var pizzaSize = $("select#size").val();

    var newPizza = new Pizza(quantity, topping, pizzaSize);
    var pizzaPrice = newPizza.calculatePrice();

    $("#price").text(pizzaPrice);

    $("#result").show();

    event.preventDefault();
  });
});
