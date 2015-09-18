function Pizza(quantity, topping, pizzaSize) {
  this.quantity = quantity;
  this.topping = topping;
  this.pizzaSize = pizzaSize;

};

Pizza.prototype.calculatePrice = function() {
  var totalPrice = 8 + (this.topping * 1);

  if (this.pizzaSize == "small") {
    return totalPrice * this.quantity;
  } else if (this.pizzaSize == "medium") {
      return (totalPrice + 2) * this.quantity;
    }
  };
