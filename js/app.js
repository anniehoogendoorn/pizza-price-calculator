$(document).ready(function() {

  $("form#order-form").submit(function(event) {
    var quantity = $("input#quantity").val();
    var pizzaSize = $("select#size").val();

    // var topping = [];

    var newPizza = new Pizza(quantity, pizzaSize);

debugger;

    var veggieTopping = $("input.veg:checkbox:checked").each(function() {
      newPizza.veggieTopping.push(veggieTopping);
    });

    var meatTopping = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatTopping.push(meatTopping);
    });


    var pizzaPrice = newPizza.calculatePrice();

    $("#price").text(pizzaPrice);

    $("#result").show();

    event.preventDefault();
  });
});
