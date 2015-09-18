describe("Pizza", function() {
  debugger;
  it("creates a pizza with the given specifications", function() {
    var testPizza = new Pizza(1, 1, "small");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.topping).to.equal(1);
    expect(testPizza.pizzaSize).to.equal("small");
  });
});

describe('calculatePrice', function() {
  it("returns the price for one small pizza with one topping", function() {
    var testPizza = new Pizza(1, 1, "small");
    expect(testPizza.calculatePrice()).to.equal(9);
  });

  it("returns the price for one medium pizza with one topping", function() {
    var testPizza = new Pizza(1, 1, "medium");
    expect(testPizza.calculatePrice()).to.equal(11);
  });

  it("returns the price for one large pizza with one topping", function() {
    var testPizza = new Pizza(1, 1, "large");
    expect(testPizza.calculatePrice()).to.equal(13);
  });

  it("returns the price for one large pizza with one topping", function() {
    var testPizza = new Pizza(1, 1, "x-large");
    expect(testPizza.calculatePrice()).to.equal(16);
  });

  it("returns the price for 2 large pizzas with 2 toppings", function() {
    var testPizza = new Pizza(2, 2, "x-large");
    expect(testPizza.calculatePrice()).to.equal(34);
  });




});
