function Pizza(quantity, pizzaSize) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.veggieTopping = [];
  this.meatTopping =[];

};

Pizza.prototype.calculatePrice = function() {
  var totalPrice = 8 + (this.veggieTopping.length * 1) + (this.meatTopping.length * 2);

  if (this.pizzaSize == "small") {
    return totalPrice * this.quantity;
  } else if (this.pizzaSize == "medium") {
      return (totalPrice + 2) * this.quantity;
    } else if (this.pizzaSize == "large") {
        return (totalPrice + 4) * this.quantity;
    } else if (this.pizzaSize == "x-large") {
        return (totalPrice + 7) * this.quantity;
    }
  };


  // function Pizza(quantity, topping, pizzaSize) {
  //   this.quantity = quantity;
  //   this.topping = topping;
  //   this.pizzaSize = pizzaSize;
  //
  // };
  //
  // Pizza.prototype.calculatePrice = function() {
  //   var totalPrice = 8 + (this.topping * 1);
  //
  //   if (this.pizzaSize == "small") {
  //     return totalPrice * this.quantity;
  //   } else if (this.pizzaSize == "medium") {
  //       return (totalPrice + 2) * this.quantity;
  //     } else if (this.pizzaSize == "large") {
  //         return (totalPrice + 4) * this.quantity;
  //     } else if (this.pizzaSize == "x-large") {
  //         return (totalPrice + 7) * this.quantity;
  //     }
  //   };
