<p>
  <h1 align="center">Command Pattern</h1>
</p>

> The Command pattern creates objects to represent actions or requests, separating the sender from the performer of the action. This separation enhances flexibility in customization and supports features like queuing of actions and undo/redo functionality. It simplifies code, promotes reusability, and enables advanced features in applications.

***

### The easiest way to understand the intent of the Command pattern is to look at examples of where it is useful.

**Example Scenario: Discord Bot Command Handling**

Imagine you're the creator of a popular Discord bot that adds exciting features to servers. Users interact with your bot by sending messages, and you want to enhance their experience by introducing a range of slash commands, each triggering a specific action. To achieve this, you decide to apply the Command pattern.

In this scenario, the Command pattern becomes a powerful tool for efficiently managing and executing user requests. Here's how it unfolds:

**1. Command Objects for User Actions:**
You define command objects for each distinct action your bot can perform. For instance, you create command classes like GreetCommand, PlayMusicCommand, FetchDataCommand, and so on. Each command class adheres to a common Command interface, requiring the implementation of an execute/run() method.

**2. Bot Interaction with User Inputs:**
When users send messages to the Discord server, your bot's command handling system processes the messages. It detects if a message contains a slash command (e.g., "/greet," "/play," "/fetch"), indicating the user's intended action.

**3. Command Execution:**
Upon identifying a command in the user's message, the bot's command handling system instantiates the corresponding command object. For example, if the user types "/greet," the system creates an instance of the GreetCommand class.

**4. Execution and Response:**
The bot executes the command by invoking its execute() method. This method performs the specific action associated with the command. For instance, the GreetCommand might send a friendly greeting to the user's server.

**5. Flexible Extension and Maintenance:**
New command classes can be added easily as your bot's capabilities expand. Whether it's introducing mini-games, searching the web, or managing server settings, each command is encapsulated within its class, promoting a clean and modular codebase.

**6. Scalability and User Experience:**
As your bot's functionality grows, the Command pattern ensures that the addition of new features doesn't complicate the overall structure. Each command is a self-contained unit, promoting code reusability and easing the integration of user-requested actions.

**7. Undo/Redo and User Interaction:**
By maintaining a history of executed commands, you're not only able to fulfill user requests but also provide undo and redo functionality. Users can reverse previous actions or reapply them, enhancing their interaction with your bot.

In summary, the Command pattern empowers your Discord bot to handle user interactions seamlessly and dynamically. It encapsulates user actions as distinct command objects, simplifying the management of bot functionalities and allowing for easy expansion and enhancement. Whether it's welcoming users, playing music, or retrieving data, your bot's command handling system efficiently translates user intents into meaningful actions.

***

### Steps to implementing the command pattern. 

> **AGENDA** : Create execution of various actions within a software application, by encapsulating these actions as command objects, 

1. **Define the Command Interface**: Create an interface called `Command` that defines the structure and behavior of command objects. This interface should include properties for command names, a help method, and a run method for executing the command.

```typescript
export default interface Command {
  readonly commandNames: string[];
  help(commandPrefix: string): string;
  run(parsedUserCommand: Message): Promise<void>;
}
```

2. Implement **Concrete Command Classes** that implement the `Command` interface. Each class should define its specific command names, a help message, and the logic to execute the command.

```typescript
export class GreetCommand implements Command {
  commandNames = ["greet", "hello"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}greet to get a greeting.`;
  }

  async run(message: Message): Promise<void> {
    await message.reply("hello, User!");
  }
}

export class TimeCommand implements Command {
  commandNames = ["time"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}time to get the current time.`;
  }

  async run(message: Message): Promise<void> {
    const now = new Date();
    await message.reply(`${now.getHours()} : ${now.getMinutes()}`);
  }
}
```

3. Create an **Invoker** or in our case Command Registry, set up a command registry to manage and map user commands to their corresponding command objects. This registry will aid in command execution and help provide consistent responses to users.

```typescript
export class CommandRegistry {
  private commands: Map<string, Command> = new Map();
  private history: Command[] = [];

  run(command: Command): void {
     command.run();
     this.history.push(command);
  }
}

```

4. Create a **Client** in your application's logic, parse user input (e.g., messages or user commands) and use the command registry to retrieve and execute the corresponding command.

```typescript
const registry = new CommandRegistry();

const greetCommand = new GreetCommand();
const timeCommand = new TimeCommand();

registry.run(timeCommand);
registry.run(greetCommand);
```

***

<h3 align="center">When to use Command pattern over <b>other patterns</b></h3>

Here are a few design patterns that are similar to the Command pattern, along with explanations of when to use the Command pattern over each of them:

1. **Strategy Pattern:**
   - Strategy Pattern defines a family of interchangeable algorithms, allowing clients to switch between different strategies without altering their code.
   - Use Command Pattern over Strategy Pattern when you want to encapsulate user actions as distinct objects, enabling undo/redo and command history management.
   - Similarity: Both patterns encapsulate behaviors in separate objects.
   - Applicability: Strategy Pattern is about selecting algorithms dynamically. Use Command Pattern when you need to encapsulate user actions as distinct executable commands.

In summary, while these design patterns share some similarities with the Command pattern, the Command pattern provides a structured approach to managing user interactions in scenarios where user commands need to be treated as first-class objects in the application's design.

