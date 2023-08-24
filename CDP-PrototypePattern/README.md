<p>
  <h1 align="center">Prototype Pattern</h1>
</p>

> The Prototype pattern is a creational design pattern that focuses on creating new objects by copying or cloning existing instances, known as prototypes. It allows you to create new objects that are initially similar to existing ones, making use of a prototype object as a template. This pattern is particularly useful when creating objects is costly in terms of resources or time, and you want to avoid the overhead of repeatedly creating objects from scratch.

***

### The easiest way to understand the intent of the Prototype pattern is to look at examples of where it is useful.

Let's say you are developing a game and need to create various instances of a character class with different attributes and abilities. Instead of creating each character from scratch, you can use the Prototype pattern. You create a prototype instance of the character class and then clone it to create new characters with similar attributes. This approach not only saves resources but also ensures consistency among character instances.

***

### Steps to implementing the adapter pattern. 

> **AGENDA** : The Adapter pattern allows otherwise incompatible classes to work together by converting the interface of one class into an interface expected by the clients. 

1. Prototype: The prototype is an existing object that serves as a blueprint for creating new instances. It defines an interface for cloning itself.
```TS
interface Prototype {
    clone(): Prototype;
}
```

2. Concrete Prototype: Concrete prototypes are specific instances of the prototype object. They implement the cloning interface and provide a method to create a copy of themselves.
```TS
// Concrete prototype class
class Character implements Prototype {
    constructor(public name: string, public type: string) {}

    clone(): Prototype {
        return new Character(this.name, this.type);
    }
}
```

3. Client: The client is responsible for creating new objects by requesting clones of existing prototypes. It interacts with the prototype's cloning mechanism.
```TS
// Client code
const originalCharacter = new Character("Warrior", "Knight");
const clonedCharacter = originalCharacter.clone();

console.log(originalCharacter); // Output: Character { name: 'Warrior', type: 'Knight' }
console.log(clonedCharacter);   // Output: Character { name: 'Warrior', type: 'Knight' }
```


***

<h3 align="center">When to use Builder pattern over <b>other patterns</b></h3>

The decision to use the Builder pattern over other patterns depends on the specific requirements and constraints of your project. While the Builder pattern is valuable in certain scenarios, there are situations where it may be a better choice compared to other patterns:

1. **Builder vs. Telescoping Constructors (Anti-Pattern)**:
   - Use Builder when you have a class with multiple optional parameters or configurations that can lead to confusing and error-prone telescoping constructors.
   - Telescoping constructors become unwieldy as the number of parameters increases, whereas the Builder pattern provides a more structured and readable way to initialize objects.

2. **Builder vs. Factory Method**:
   - Use Builder when you need to create complex objects with multiple configurable attributes or parts.
   - Factory Method is more suitable when you want to delegate the responsibility of object creation to subclasses, providing a way to create different types of related objects.

3. **Builder vs. Prototype**:
   - Use Builder when you want to construct complex objects step by step, specifying different attributes and configurations during the construction process.
   - Prototype is more suitable when you need to create copies of existing objects efficiently, especially when the creation process is resource-intensive.

4. **Builder vs. Abstract Factory**:
   - Use Builder when you need to create complex objects with a specific configuration.
   - Abstract Factory is more suitable when you want to provide an interface for creating families of related or dependent objects, adhering to a common theme.

5. **Builder vs. Singleton**:
   - Use Builder when you want to construct multiple instances of a complex object with various configurations.
   - Singleton is used to ensure that a class has only one instance and provides a global point of access to that instance.

6. **Builder vs. Decorator**:
   - Use Builder when you want to construct a complete object with various attributes and configurations.
   - Decorator is more suitable when you want to dynamically add responsibilities or behaviors to objects without altering their structure.

In summary, use the Builder pattern when you need to create complex objects step by step, with multiple configurable attributes or parts. The Builder pattern excels in scenarios where the construction process involves a combination of parameters, optional settings, and a clear separation between object construction and representation. While other design patterns also address object creation and initialization, the Builder pattern's focus on gradual and controlled construction makes it a valuable choice in specific situations.

