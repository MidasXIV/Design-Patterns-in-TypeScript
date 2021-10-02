// The interface Coffee defines the functionality of Coffee implemented by decorator
abstract class Coffee {
  public abstract getCost(): number;        // Returns the cost of the coffee
  public abstract getIngredients(): string; // Returns the ingredients of the coffee
}

// Extension of a simple coffee without any extra ingredients
class SimpleCoffee extends Coffee {
  public getCost() {
    return 1;
  }
  public getIngredients() {
    return "Coffee";
  }
}

// Abstract decorator class - note that it implements Coffee interface
abstract class CoffeeDecorator extends Coffee {
  private decoratedCoffee: Coffee;

  public constructor(coffee: Coffee) {
    super()
    this.decoratedCoffee = coffee;
  }

  public getCost() { // Implementing methods of the interface
    return this.decoratedCoffee.getCost();
  }

  public getIngredients() {
    return this.decoratedCoffee.getIngredients();
  }
}

// Decorator WithMilk mixes milk into coffee.
// Note it extends CoffeeDecorator.
class WithMilk extends CoffeeDecorator {
  public constructor(coffee: Coffee) {
    super(coffee);
  }

  public getCost() { // Overriding methods defined in the abstract superclass
    return super.getCost() + 0.5;
  }

  public getIngredients() {
    return super.getIngredients() + ", Milk";
  }
}

// Decorator WithSprinkles mixes sprinkles onto coffee.
// Note it extends CoffeeDecorator.
class WithSprinkles extends CoffeeDecorator {
  public constructor(coffee: Coffee) {
    super(coffee);
  }

  public getCost() {
    return super.getCost() + 0.2;
  }

  public getIngredients() {
    return super.getIngredients() + ", Sprinkles";
  }
}

class WithMatcha extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public getCost() {
    return super.getCost() + 2;
  }

  public getIngredients() {
    return super.getIngredients() + ", Matcha";
  }
}

let coffee = new SimpleCoffee();
console.log(`${coffee.getIngredients()} :: ${coffee.getCost()}`);

coffee = new WithMilk(coffee);
console.log(`${coffee.getIngredients()} :: ${coffee.getCost()}`);

coffee = new WithMatcha(coffee);
coffee = new WithSprinkles(coffee);
console.log(`${coffee.getIngredients()} :: ${coffee.getCost()}`);