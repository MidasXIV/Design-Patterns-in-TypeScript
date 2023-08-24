<p>
  <h1 align="center">Chain of responsibility Pattern</h1>
</p>

> The Chain of Responsibility is a behavioral design pattern that allows you to create a chain of objects, where each object has the ability to handle a certain type of request or task. The request is passed through the chain until it is handled by an appropriate handler or until the end of the chain is reached.

In essence, it let's you pass requests along a chain of handlers; Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

***

### The easiest way to understand the intent of the Chain of Responsibility pattern is to look at examples of where it is useful.

Imagine an organization where employees can submit leave requests, and these requests need to be approved at different levels of authority. The Chain of Responsibility pattern can be used to model this scenario.

The Chain of Responsibility pattern is particularly suitable when certain conditions or requirements align with its characteristics. Here are scenarios in which you might prefer to use the Chain of Responsibility pattern over other design patterns:

1. **Dynamic Handling Logic:**
   When the handling logic is subject to change or configuration at runtime, the Chain of Responsibility pattern excels. It allows you to dynamically assemble and modify the sequence of handlers, accommodating changing business rules or requirements.

2. **Multiple Possible Handlers:**
   If there are multiple potential handlers for a request, and you want to ensure that one or more of them can process the request, the Chain of Responsibility is a good fit. This is especially useful in scenarios where the processing responsibilities might differ for different cases.

4. **Single Responsibility Principle:**
   If you aim to adhere to the Single Responsibility Principle by separating the handling logic into individual handler classes, the Chain of Responsibility is appropriate. This prevents handlers from becoming bloated with unrelated code.

5. **Flexible Error Handling:**
   In situations where you need to provide multiple levels of error handling or exception processing, the Chain of Responsibility can offer a structured way to handle different types of errors at different levels of the chain.

6. **Avoiding Large Switch Statements:**
   If you're dealing with a large number of potential cases or conditions that would lead to a cumbersome if-else or switch statement, using the Chain of Responsibility can lead to cleaner and more maintainable code.

7. **Hierarchical Processing:**
   When requests need to be processed hierarchically or in a specific order, the Chain of Responsibility pattern allows you to create a sequence of handlers that reflect the desired order of processing.

8. **Implementing Middleware Pipelines:**
   In applications that involve processing pipelines, such as web frameworks, the Chain of Responsibility can be used to implement middleware layers that perform various tasks on incoming requests or outgoing responses.

In essence, use the Chain of Responsibility pattern when you require a flexible, dynamic, and modular approach to handling requests, especially when you expect changes or extensions in the handling logic. It's particularly valuable in scenarios where you want to avoid tight coupling, manage complex branching, or separate responsibilities into distinct components.

#### How it works
* When a request is made, it is passed to the first handler in the chain.
* The handler examines the request and decides whether it can handle it or not. Along with processing the request, handlers pass the request further along the chain.
* If the handler can handle the request, it processes the request and completes the task.
* If the handler cannot handle the request, it passes the request to the next handler in the chain.
* This process continues until a handler is found that can handle the request or until the end of the chain is reached. ( The request travels along the chain until all handler had the chance to process it )
* In some variations, A handler can decide not to pass the request further down the chain and effectively stop any further processing. So it's either one handler that process the request or none at all.

***

### Steps to implementing the adapter pattern. 

> **AGENDA** : The chain of responsibility relies on transforming particular behaviors into stand-alone objects called **handlers**. The pattern suggests you link these handlers to a chain, this is done by designing the handler interface such that it has a field for storing a reference to the next handler in the chain. Once we chain these handlers we can streamline processing of the request.
>
> * Provides flexibility to dynamically change the chain or add new handlers without affecting the client code.
> * Supports open/closed principle by allowing new handlers to be added without modifying existing code.


1. We start by identifying the *Request*, in this case A leave request represents a request for taking time off.
```TS
interface LeaveRequest {
  days: number;
  employee: string;
}
```

2. Then we identify the interface of the **Handler**, A Handler in this case represent different levels of authority for approving leave requests. For example, there could be handlers for team leads, managers, and HR. Each handler knows if it can approve the request or if it should pass it to the next handler. The interface should have a field to store reference to the next handler.
```TS
// 
abstract class LeaveHandler {
  protected nextHandler: LeaveHandler | null = null;

  setNextHandler(handler: LeaveHandler): void {
    this.nextHandler = handler;
  }

  abstract handleRequest(request: LeaveRequest): void;
}

class TeamLead extends LeaveHandler {
  handleRequest(request: LeaveRequest): void {
    if (request.days <= 2) {
      console.log(`Team Lead approved ${request.days} days leave for ${request.employee}`);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class Manager extends LeaveHandler {
  handleRequest(request: LeaveRequest): void {
    if (request.days <= 5) {
      console.log(`Manager approved ${request.days} days leave for ${request.employee}`);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class HR extends LeaveHandler {
  handleRequest(request: LeaveRequest): void {
    console.log(`HR approved ${request.days} days leave for ${request.employee}`);
  }
}
```

3. The **chain** consists of handlers linked in a specific order of authority. The request is passed from one handler to another until it is approved or rejected.
```TS
const teamLead = new TeamLead();
const manager = new Manager();
const hr = new HR();

teamLead.setNextHandler(manager);
manager.setNextHandler(hr);
```

4. The **Client** passes the request to the first handler in the chain.
```TS
const leaveRequest: LeaveRequest = { days: 3, employee: "John" };
teamLead.handleRequest(leaveRequest); // Output: Manager approved 3 days leave for John
```

In this example, the Chain of Responsibility pattern helps ensure that the leave request is handled by the appropriate authority level, based on the number of days requested.

***

### Variations of Chain of Responsibility Pattern

1. **Chain Can Break:**
   In this variation, the primary goal is to ensure that the event or request goes through all the handlers in the chain. If a handler decides that it cannot handle the event (e.g., it rejects the event based on certain conditions), the chain is broken, and the event does not proceed further in the chain. This variation is useful when you want the event to follow a strict sequential path through the handlers.

   For example, consider a purchase approval process. The chain of handlers consists of different levels of authority, such as team leads, managers, and executives. If any handler in the chain rejects the purchase request, the approval process is halted, and the request is not forwarded to higher levels of authority.

2. **Non-Breaking Chain:**
   In this variation, the primary objective is to ensure that the event is processed by each handler in the chain, regardless of whether a handler rejects the event or not. Each handler performs its specific processing on the event, and the chain continues to the next handler in sequence. The idea here is to provide a uniform processing experience for each handler without breaking the chain.

   For instance, consider a logging system where events are passed through different logging handlers. Even if one handler determines that it cannot log the event due to a specific condition, the event still proceeds to subsequent handlers for their logging activities.

3. **Exclusive Handler Execution:**
   This variation focuses on a scenario where only one specific handler from the chain is allowed to execute the request. The chain of handlers may consist of various handlers, but only one handler is chosen to process the request based on certain criteria. Once the appropriate handler is found, it exclusively handles the event, and the chain is terminated.

   A real-world example could be a network communication system where incoming data packets need to be processed by a specific protocol handler based on the packet type. Once the suitable protocol handler is identified, it processes the packet according to the protocol's requirements.

These variations offer flexibility in how the Chain of Responsibility pattern can be applied based on the requirements of your system. Depending on the context, you can choose whether the chain should break, continue non-breaking, or select a specific handler for exclusive execution of the request. Each variation caters to different scenarios and use cases, allowing you to design a chain of handlers that suits your specific needs.

***

### Advantages Over Conventional if-else / switch Statements:

1. **Open/Closed Principle:**
   The Chain of Responsibility pattern follows the Open/Closed Principle by allowing new handlers to be added without altering existing code. In contrast, adding new cases to if-else or switch statements can lead to changes in the existing code, violating this principle.

2. **Enhanced Flexibility:**
   The pattern offers greater flexibility by enabling the creation of complex, flexible, and dynamic chains of handlers. This is particularly useful in scenarios with intricate decision-making logic.

3. **Reduced Code Duplication:**
   The Chain of Responsibility pattern reduces code duplication by centralizing the handling logic within the handlers. This prevents the need to repeat similar conditional statements in multiple parts of the codebase.

4. **Simplification of Client Code:**
   Client code becomes cleaner and easier to read since it only needs to send the request to the first handler in the chain, without worrying about the details of each handler.

5. **Scalability and Reusability:**
   The pattern scales well as the number of handlers increases. It allows you to reuse existing handlers in different chains, enhancing code reusability.

6. **Easier Maintenance:**
   Changes to the handling logic can be isolated within individual handlers, reducing the risk of introducing bugs or affecting other parts of the application.

Overall, the Chain of Responsibility pattern provides a more modular, flexible, and maintainable solution compared to both other design patterns and the traditional if-else or switch statement approach. It's particularly advantageous in scenarios where there is a need for multiple processing steps, complex decision-making, or a potential for future changes in the handling logic.

<h3 align="center">When to use Chain of responsibility pattern over <b>other patterns</b></h3>

The decision to use the Chain of Responsibility pattern over other design patterns depends on the specific characteristics of your application and the problem you're trying to solve. Here are scenarios where the Chain of Responsibility pattern might be more suitable than other design patterns:

1. **Command Pattern:**
   - Use Chain of Responsibility when you have multiple potential handlers for a request and you want to ensure that one or more of them can process it.
   - Chain of Responsibility is more focused on handling and passing requests, while the Command pattern emphasizes encapsulating actions as objects.
   - If you need dynamic assembly of handlers at runtime, Chain of Responsibility is a better choice.

2. **Strategy Pattern:**
   - Choose Chain of Responsibility when you need a sequence of handlers to process a request and you're concerned about dynamic order or selection of handlers.
   - Strategy focuses on encapsulating interchangeable algorithms, while Chain of Responsibility emphasizes the passing of requests through a chain of handlers.

3. **Interpreter Pattern:**
   - Choose Chain of Responsibility when you need a hierarchy of handlers to interpret or process different parts of a language or grammar.
   - Interpreter focuses on interpreting or evaluating expressions, while Chain of Responsibility focuses on handling requests.

In general, choose the Chain of Responsibility pattern when your primary concern is to create a flexible, decoupled, and dynamic way of processing requests or events through a sequence of handlers. Consider other patterns when their core principles align more closely with your specific requirements. Remember that design patterns are tools to address specific problems, so the choice depends on the nature of the problem you're solving and the goals you're trying to achieve.
