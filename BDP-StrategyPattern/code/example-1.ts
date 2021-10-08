// The strategy interface declares operations common to all
// supported versions of some algorithm. The context uses this
// interface to call the algorithm defined by the concrete
// strategies.

interface NavigationStrategy {
  route(source: string, destination: string): string
}

// Concrete strategies implement the algorithm while following
// the base strategy interface. The interface makes them
// interchangeable in the context.

class ByDriving implements NavigationStrategy {
  route(source: string, destination: string) {
    return `Route from ${source} to ${destination} by driving ...`
  }
}

class ByWalking implements NavigationStrategy {
  route(source: string, destination: string) {
    return `Route from ${source} to ${destination} by walking ...`
  }
}

class ByPublicTransport implements NavigationStrategy {
  route(source: string, destination: string) {
    return `Route from ${source} to ${destination} by public transport ...`
  }
}

// The context defines the interface of interest to clients.
class NavigationContext {
  // The context maintains a reference to one of the strategy
  // objects. The context doesn't know the concrete class of a
  // strategy. It should work with all strategies via the
  // strategy interface.
  private strategy: NavigationStrategy

  constructor(strategy: NavigationStrategy) {
    this.strategy = strategy
  }

  // Usually the context accepts a strategy through the
  // constructor, and also provides a setter so that the
  // strategy can be switched at runtime.
  setStrategy(strategy: NavigationStrategy) {
    this.strategy = strategy
  }

  // The context delegates some work to the strategy object
  // instead of implementing multiple versions of the
  // algorithm on its own.
  executeStrategy(source: string, destination: string) {
    if (!this.strategy) { return; }
    return this.strategy.route(source, destination)
  }
}

// The client code picks a concrete strategy and passes it to
// the context. The client should be aware of the differences
// between strategies in order to make the right choice.

const source = "Home";
const destination = "Work";
enum modeOfTransports { "PUBLIC_TRANSPORT", "WALKING", "DRIVING" };
const modeOfTransport = modeOfTransports.WALKING;
const defaultStrategy = new ByDriving();

const _navigator = new NavigationContext(defaultStrategy);

switch (+modeOfTransport) {
  case modeOfTransports.DRIVING: _navigator.setStrategy(new ByDriving());
    break;
  case modeOfTransports.PUBLIC_TRANSPORT: _navigator.setStrategy(new ByPublicTransport());
    break;
  case modeOfTransports.WALKING: _navigator.setStrategy(new ByWalking());
    break;
}

let route = _navigator.executeStrategy(source, destination);
console.log(route);

_navigator.setStrategy(new ByPublicTransport())
route = _navigator.executeStrategy(source, destination);
console.log(route);
