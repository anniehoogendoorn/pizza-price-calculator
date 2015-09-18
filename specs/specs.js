describe("Pizza", function() {
  debugger;
  it("creates a pizza with the given specifications", function() {
    var testPizza = new Pizza(1, "small");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.topping).to.eql([]);
  });
});

describe('calculatePrice', function() {
  it("returns the price for one small pizza with one topping", function() {
    var testPizza = new Pizza(1, "small");
    expect(testPizza.calculatePrice()).to.equal(8);
  });

  it("returns the price for one medium pizza with one topping", function() {
    var testPizza = new Pizza(1, "medium");
    expect(testPizza.calculatePrice()).to.equal(10);
  });

  it("returns the price for one large pizza with one topping", function() {
    var testPizza = new Pizza(1, "large");
    expect(testPizza.calculatePrice()).to.equal(12);
  });

  it("returns the price for one large pizza with one topping", function() {
    var testPizza = new Pizza(1, "x-large");
    expect(testPizza.calculatePrice()).to.equal(15);
  });

  it("returns the price for 2 large pizzas with 2 toppings", function() {
    var testPizza = new Pizza(2, "x-large");
    expect(testPizza.calculatePrice()).to.equal(30);
  });




});
