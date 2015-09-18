describe("Pizza", function() {
  debugger;
  it("creates a pizza with the given specifications", function() {
    var testPizza = new Pizza(1, "olives", "small");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.topping).to.equal("olives");
    expect(testPizza.pizzaSize).to.equal("small");
  });
});
