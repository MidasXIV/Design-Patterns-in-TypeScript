<p>
  <h1 align="center">Memento Pattern</h1>
</p>

> The Memento design pattern is used to capture the internal state of an object and externalize it so that it can be restored later. It is useful when you need to save the state of an object and restore it later, without exposing the internal state of the object. 
>
>
> You should think of the Memento pattern when you need to:
> 
> * Save the state of an object and restore it later
> * Implement undo/redo functionality
> * Implement a "save" and "load" functionality for an object
> * Implement a "snapshot" functionality for an object

***

### The easiest way to understand the intent of the Memento pattern is to look at examples of where it is useful.

The Memento pattern is useful in applications that require saving and restoring the state of an object, such as:

* Text editors that allow users to undo and redo changes
* Games that allow players to save and load their progress
* Chat applications that allow users to save and restore their chat history

***

### Steps to implementing the Memento pattern in TypeScript:

Let's consider a scenario where we're building a "Digital Art Gallery" Museum; We wish to always have a snapshot of how the Museum looks, allowing the curator to "undo" a proposed change or "redo" a previous action.

> **AGENDA**: Use the Memento pattern to save the state of each exhibit at each point in time and allow the curator to undo and redo their actions.

1. First we define the **Memento interface** that will hold the state of the object, this step is more of a prerequisite, Memento's usually have only 1 method `getState`.
    ```typescript
    interface Memento {
      getState(): any;
    }
    ```

2. Then we add methods to our **Originator class** to **set/getState**, **set/restoreMemento**. The Originator class is the class whose state is to be saved.
    ```typescript
    class Exhibit {
        private state: any;

        setState(state: any) {
            this.state = state;
        }

        getState(): any {
            return this.state;
        }

        saveToMemento(): ExhibitMemento {
            return new ExhibitMemento(this.state);
        }

        restoreFromMemento(memento: ExhibitMemento) {
            this.state = memento.getState();
        }
    }
    ```

3. Next we create a concrete **Memento class** this class will store the state of the exhibit.
    ```typescript
    class ExhibitMemento {
        private state: any;

        constructor(state: any) {
            this.state = state;
        }

        getState(): any {
            return this.state;
        }
    }
    ```

4. **Optional Step** is to **define the Caretaker class**, This class keeps track of mementos. In usual cases this would be the client.
    ```typescript
    class Caretaker {
        private mementos: ExhibitMemento[] = [];

        addMemento(memento: ExhibitMemento) {
            this.mementos.push(memento);
        }

        getMemento(index: number): ExhibitMemento {
            return this.mementos[index];
        }
    }
    ```

5. **Example usage**: This demonstrates how to use the Memento pattern to save and restore the state of the exhibit.
    ```typescript
    // Example usage
    const digitalArtGallery = new Exhibit();

    // Initial state
    digitalArtGallery.setState({
        exhibitName: "Monalisa",
        artist: "Leonardo da Vinci",
        year: 1503
    });

    const caretaker = new Caretaker();

    // Save initial state
    caretaker.addMemento(digitalArtGallery.saveToMemento());

    // Make some changes
    digitalArtGallery.setState({
        exhibitName: "Starry Night",
        artist: "Vincent van Gogh",
        year: 1889
    });

    // Save new state
    caretaker.addMemento(digitalArtGallery.saveToMemento());

    // Restore to previous state
    digitalArtGallery.restoreFromMemento(caretaker.getMemento(0));

    console.log(digitalArtGallery.getState()); // Output: { exhibitName: "Monalisa", artist: "Leonardo da Vinci", year: 1503 }
    ```

**How it works:**

1. The Originator class uses the Memento pattern to save and restore its state.
2. The Memento interface defines the getState() method that returns the state of the object.
3. The ConcreteMemento class implements the Memento interface and holds the state of the object.
4. The Originator class uses the ConcreteMemento class to save and restore its state.

**When to use the Memento pattern over other patterns similar to it:**

The Memento pattern is particularly useful when you need to capture the internal state of an object in such a way that it can be restored to that state later. While there are other patterns that might seem similar in concept, such as Command each serves a different purpose. Here's when you might choose the Memento pattern over other similar patterns:

* Memento vs. Command Pattern:
**Command Pattern** is a popular pattern to implement undo, redo functionality, but the command pattern is more about encapsulating a request as an object, allowing for parameterization of clients with queues, requests, and operations. While it can be used for undo functionality, it's focused on encapsulating actions rather than states. **Memento Pattern** although similar captures the internal state of an object without exposing its implementation details. It's mainly concerned with capturing and restoring the state.

Note that the Memento pattern is often used in combination with other design patterns, such as the Observer pattern, to implement undo/redo functionality.
