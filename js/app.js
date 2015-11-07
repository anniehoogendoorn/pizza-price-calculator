$(document).ready(function() {

  //When form is submitted this will set quantity and pizzSize equal to user's input
  $("form#order-form").submit(function(event) {
    var quantity = $("input#quantity").val();
    var pizzaSize = $("select#size").val();

    var newPizza = new Pizza(quantity, pizzaSize);

// debugger;
    //Add each checked item to the veggieTopping array
    var veggieTopping = $("input.veg:checkbox:checked").each(function() {
      newPizza.veggieTopping.push(veggieTopping);
    });

    //Add each checked item with the meat class to the meatTopping array
    var meatTopping = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatTopping.push(meatTopping);
    });

    //runs calculatePrice function on the newPizza object and saves it
    var pizzaPrice = newPizza.calculatePrice();


    //prints the price to the page
    $("#price").text(pizzaPrice);

    //shows the result section which contains the price
    $("#result").show();

    // //Trying to add photos - not done yet!
    // if (pizzaSize == "large") {
    //
    // }
    // $("#image").show();

    //prevents JavaScript from running before html is loaded
    event.preventDefault();
  });
});
