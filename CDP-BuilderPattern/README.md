<p>
  <h1 align="center">Builder Pattern</h1>
</p>

> The intent of the Builder Pattern is to facilitate the construction of complex objects by separating the **construction process** from the actual **representation**. By using the Builder Pattern, you can simplify the process of creating complex objects, reduce constructor overloading, and improve the maintainability of your codebase. It's particularly beneficial when dealing with objects that have multiple optional or mandatory parameters and require multiple steps to be properly configured and created.

##### In essence, the Builder Pattern provides a structured approach to constructing objects, making your code more organized, flexible, and easier to read. It's a valuable tool in your design pattern toolbox when dealing with complex object creation scenarios.

***

### The easiest way to understand the intent of the Builder pattern is to look at examples of where it is useful.

Let's say you wanted to use a method or a subroutine that someone else has written because it performs some function that you need, but you cannot incorporate the routine directly into your program;

As it maybe a third party software so you cannot make changes to their code and also you don’t want to solve the problem by changing your existing code. 

Or simply the interface or the way of calling the routine is not exactly consistent or equivalent to the way that is related objects need to use it.
The Builder pattern can be a valuable asset in various scenarios within large enterprise applications, where complexity and flexibility are paramount. Here are some areas where the Builder pattern can shine:

1. **Object Creation and Initialization**: Large enterprise applications often involve creating complex objects with multiple parameters and optional configurations. The Builder pattern can simplify this process by encapsulating the construction and initialization logic, making the code more readable and maintainable.

2. **Configuration Management**: When dealing with intricate system configurations that involve setting up various components with different options, the Builder pattern can help manage and maintain consistent configurations across the application.

3. **Database Query Building**: In applications that rely heavily on database interactions, the Builder pattern can be employed to construct dynamic and complex database queries. This ensures the separation of query construction from the database interactions themselves, leading to cleaner and more organized code.

4. **UI Component Creation**: Building complex user interfaces often requires assembling various UI components with different attributes and configurations. The Builder pattern can streamline this process by providing a structured way to create and arrange UI components.

5. **Document Generation**: In applications that generate reports, documents, or other formatted outputs, the Builder pattern can assist in creating and formatting these documents. It abstracts away the complexities of formatting while allowing for customization.

6. **Data Transformation**: Large enterprise applications often involve data transformation and mapping between different formats or structures. The Builder pattern can aid in constructing transformation pipelines, ensuring data consistency and facilitating the conversion process.

7. **Communication and Integration**: When integrating with external systems, services, or APIs, the Builder pattern can help standardize communication protocols and message formats, making it easier to manage interactions and adapt to changes.

8. **Test Data Generation**: For testing purposes, generating realistic and diverse test data can be challenging. The Builder pattern can be used to create builder objects specifically designed to generate valid and varied test data.

9. **Workflow and Process Orchestration**: When orchestrating complex workflows or processes, the Builder pattern can be applied to build sequences of actions or tasks while allowing for dynamic adjustments and customizations.

10. **Plugin and Extension Systems**: Large applications often support plugins or extensions. The Builder pattern can help define a consistent interface for plugin construction and initialization, ensuring that plugins are integrated seamlessly into the application.

In summary, the Builder pattern's ability to encapsulate construction and configuration processes, manage complexity, and promote flexibility makes it a powerful tool in designing large enterprise applications that require modular, maintainable, and extensible codebases.

***

### Steps to implementing the adapter pattern. 

> **AGENDA** : The Adapter pattern allows otherwise incompatible classes to work together by converting the interface of one class into an interface expected by the clients. 

1. First we **Identify the complex object(s)** you want to create. Define its attributes, properties, and possible configurations. This is the object that the builder will construct.
```TS
// Step 1: Define the Product
class Car {
  constructor(public make: string, public model: string, public year: number) {}
}
```

2. Then **identify the Builder Interface**, Design an abstract interface or class that defines the methods for constructing and configuring the parts of the complex object. These methods should cover various aspects of object creation.
```TS
// Step 2: Create the Builder Interface
interface CarBuilder {
  setMake(make: string): void;
  setModel(model: string): void;
  setYear(year: number): void;
  build(): Car;
}
```

3. **Create one or more concrete classes** that implement the builder interface. Each concrete builder should provide methods to build different parts of the complex object and assemble them.
```TS
// Step 3: Implement Concrete Builders
class SedanBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car("Unknown", "Unknown", 0);
  }

  setMake(make: string): void {
    this.car.make = make;
  }

  setModel(model: string): void {
    this.car.model = model;
  }

  setYear(year: number): void {
    this.car.year = year;
  }

  build(): Car {
    return this.car;
  }
}
```

4. Create the Director (Optional): Consider implementing a director class that coordinates the construction process using a builder. The director can provide a higher-level interface for building objects and managing the order of construction steps.

5. Client Code: In the client code, create an instance of the builder you want to use. Use the builder's methods to set the attributes and configurations of the complex object.
```TS
// Step 5: Client Code
const sedanBuilder = new SedanBuilder();
sedanBuilder.setMake("Toyota");
sedanBuilder.setModel("Camry");
sedanBuilder.setYear(2022);
```

6. Build the Object: Call the builder's methods to construct the complex object step by step. The builder handles the construction details, ensuring that the final object is properly initialized.
```TS
// Step 6: Build the Object
const car: Car = sedanBuilder.build();
```

7. Obtain the Result: After constructing the object, use a method provided by the builder to obtain the final product. This method should return the fully constructed and configured complex object.
```TS
// Step 7: Obtain the Result
console.log(car);
```

> Use the Complex Object: Once you have the constructed complex object, you can use it as needed within your application.

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

