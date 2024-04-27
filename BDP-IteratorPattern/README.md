<p>
  <h1 align="center">Iterator Pattern</h1>
</p>

> The iterator pattern is a behavioral design pattern that allows you to traverse a collection of objects without exposing its underlying representation.
It's useful when you need to process complex data structures, such as lists or trees, in a specific way. This pattern helps you decouple the iteration logic from the data structure, making it easier to change the underlying structure without affecting the iteration logic.

Think of the iterator pattern when you're working with complex data structures and need to iterate over them in a specific way, but you anticipate the way in which the data structured is composed my change. For example, when you're working with a large dataset and need to process each item in a specific order, you currently store these data structures as a list but in future you can use a graph based structure to store data. The entire system need not change because the data structure changes.

***

### The easiest way to understand the intent of the Iterator pattern is to look at examples of where it is useful.

The iterator pattern is commonly used when working with a database, you might use an iterator to iterate over a large dataset without having to load the entire dataset into memory. 

Before we jump into a practical example it is necessary to understand why we need an iterator to traverse a complex data structure. 

**Decoupling / Improved maintainability / Abstraction / Flexibility:** The iterator is decoupled from the specific implementation of the data structure, making it easier to change the data structure or switch to a different implementation. We can store our data as an array or a linked list or anything else, it doesn't matter as the iterator provides an abstraction layer between the data structure and the code that uses the data, making it easier to switch between different implementations. As the iterator is responsible for traversing through the data and the rest of system is unaffected. The iterator makes it easier to modify or replace the data structure without affecting the code that uses the data.

***

### Here are the steps to implement the Iterator pattern:

> **AGENDA** : Use the iterator pattern to hide the underlying representation of the collection/data, from the means of accessing the collection/data. Iterator pattern uses stand-alone objects called **iterators** which has methods for iterating over the data structure. 
>
> * Provides flexibility to dynamically change the iterator or add new iterators without affecting the client code.
> * Supports open/closed principle by allowing new iterators to be added without modifying existing code.

first we understand the moving parts in the Iterator pattern:

1. **Aggregate**: This is the class that contains the data structure that needs to be iterated over. The Aggregate class provides a method to create an Iterator object.

2. **Iterator**: This is the class that implements the iteration logic. The Iterator class provides methods to iterate over the data structure, such as `hasNext()` and `next()`.

3. **Concrete Iterator**: This is a subclass of the Iterator class that is specific to the Aggregate class. The Concrete Iterator class provides the implementation of the iteration logic for the specific Aggregate class.

4. **Client**: This is the class that uses the Iterator pattern to iterate over the data structure. The Client class uses the Iterator object to iterate over the data structure.

**Step 1: Define the Aggregate class:**

* Create a class that contains the data structure that needs to be iterated over.
* Define a method to create an Iterator object.

```typescript
class Aggregate {
  private collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  public iterator(): Iterator {
    return new Iterator(this.collection);
  }
}
```

Step 2: Define the Iterator interface:

* Create an interface that defines the methods for iterating over the data structure.
* The methods should include `hasNext()` and `next()`.

```typescript
interface Iterator<T> {
  next(): T | undefined;
  hasNext(): boolean;
  remove(): void;
}
```

Step 3: Define the Concrete Iterator class:

* Create a subclass of the Iterator class that is specific to the Aggregate class.
* Implement the iteration logic for the specific Aggregate class.

```typescript
class MyIterator<T> implements Iterator<T> {
  private collection: T[];
  private index: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.index = 0;
  }

  next(): T | undefined {
    if (!this.hasNext()) {
      return undefined;
    }
    const item = this.collection[this.index];
    this.index++;
    return item;
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }

  remove(): void {
    if (!this.hasNext()) {
      throw new Error("Cannot remove from an empty iterator");
    }
    this.collection.splice(this.index - 1, 1);
  }
}
```

Step 4: Implement the Aggregate class:

* Implement the method to create an Iterator object.
* Use the Concrete Iterator class to iterate over the data structure.

```typescript
class MyAggregate {
  private collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  public iterator(): MyIterator {
    return new MyIterator(this.collection);
  }
}
```

Step 5: Implement the Client class:

* Use the Iterator object to iterate over the data structure.
* Use the `hasNext()` and `next()` methods to iterate over the data structur

```typescript
const songs: Song[] = [
  { name: 'Song 1' },
  { name: 'Song 2' },
  { name: 'Song 3' },
];

const aggregate = new MyAggregate(songs);
const iterator = aggregate.iterator();
while (iterator.hasNext()) {
   const song = iterator.next();
   console.log(`Playing song: ${song.name}`);
}
```
> In future if the data structure changes, a new **iterator** will need to be written specifically for the new **data structure** and be used in the **aggregate**, the client code will remain unchanged!

***

<h3 align="center">When to use Chain of responsibility pattern over <b>other patterns</b></h3>

There are other patterns that are similar to the Iterator pattern, including:

1. **Visitor pattern**: The Visitor pattern is similar to the Iterator pattern in that it allows you to traverse a data structure and perform operations on each element. However, the Visitor pattern is more focused on performing operations on each element, whereas the Iterator pattern is more focused on iterating over the data structure.
2. **Composite pattern**: The Composite pattern is similar to the Iterator pattern in that it allows you to compose objects together to form a new object. However, the Composite pattern is more focused on composing objects together to form a new object, whereas the Iterator pattern is more focused on iterating over a data structure.
3. **State pattern**: The State pattern is similar to the Iterator pattern in that it allows you to change the behavior of an object based on its state. However, the State pattern is more focused on changing the behavior of an object based on its state, whereas the Iterator pattern is more focused on iterating over a data structure.

When to use the Iterator pattern over other patterns:

1. **Use the Iterator pattern when you need to iterate over a complex data structure**: If you need to iterate over a complex data structure, such as a graph or a tree, the Iterator pattern is a good choice.
2. **Use the Iterator pattern when you need to decouple the iteration logic from the data structure**: If you need to separate the iteration logic from the data structure, the Iterator pattern is a good choice.
3. **Use the Iterator pattern when you need to support multiple iteration protocols**: If you need to support multiple iteration protocols, such as iterating over a collection of objects or iterating over a stream of data, the Iterator pattern is a good choice.

In summary, the Iterator pattern is a powerful tool for iterating over complex data structures and decoupling the iteration logic from the data structure. It is similar to other patterns, such as the Visitor pattern and the Composite pattern, but it is more focused on iterating over a data structure.



