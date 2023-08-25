<p>
  <h1 align="center">Flyweight Pattern</h1>
</p>

> The Flyweight design pattern is a structural pattern that focuses on optimizing memory usage by sharing common data among multiple objects. It's used when you have a large number of similar objects that can share certain parts of their state, effectively reducing the memory footprint of your application.

The essence of the Flyweight pattern is all about **sharing**. When you have a lot of similar objects that have parts that can be shared among them, the Flyweight pattern helps you save memory by storing those shared parts separately. This way, you create the heavy parts only once and reuse them for multiple objects. It's like having a bunch of LEGO pieces that you use to build different structures without making duplicates of the same piece. Remember, if you notice a situation where objects have common parts that can be shared, the Flyweight pattern can be a smart way to make your program more efficient.

***

### The easiest way to understand the intent of the Flyweight pattern is to look at examples of where it is useful.

The Flyweight design pattern is beneficial in scenarios where you have a large number of objects that share common properties and can be grouped into intrinsic and extrinsic states. This pattern is useful when you need to conserve memory and reduce the overhead associated with creating and managing many similar objects. Here are some cases where the Flyweight pattern can be beneficial:

1. **Large Number of Objects**: When you need to create a significant number of objects with similar attributes, and the objects can be categorized into intrinsic (shared) and extrinsic (unique) states.

2. **Memory Efficiency**: If the objects have a lot of shared properties or data, using the Flyweight pattern can help reduce memory usage by storing shared data in a centralized way.

3. **Performance Optimization**: The pattern can improve performance by minimizing the overhead of object creation and destruction. This is especially useful in resource-constrained environments.

4. **Stateless Objects**: When the objects don't have any intrinsic state that varies between instances, the Flyweight pattern can be used to share a single instance of the object.

5. **Caching and Reuse**: If the objects are frequently used and the cost of creating them is high, the pattern can help maintain a pool of reusable instances for better performance.

6. **User Interface Elements**: In graphical applications, elements such as icons, fonts, and images can be treated as flyweights. Common properties (like appearance) can be shared, while specific properties (like position) are unique.

7. **Text Processing**: For text editors or word processors, individual characters can be implemented as flyweights. Character shapes and fonts are shared, while the position and formatting are unique.

8. **Game Development**: In video games, reusable objects like particles, bullets, and enemies can be implemented using the Flyweight pattern. Common properties (like graphics) are shared, while specific properties (like position) differ.

9. **Network Communication**: In network-related applications, flyweights can be used to represent network connections or data packets. Shared protocol-related data can be centralized, while connection-specific data is unique.

10. **Database Systems**: When dealing with database records or result sets, shared metadata (like column names) can be treated as flyweights, while record-specific data is distinct.

Remember that the Flyweight pattern is most effective when there is a significant amount of shared data among objects and when the cost of object creation and management is relatively high. If objects don't share much data or if object creation is inexpensive, the benefits of the Flyweight pattern may be less pronounced.

***

### Steps to implementing the Flyweight pattern. 

Let's consider a scenario where we're building a virtual world simulation game. The game world contains various types of trees, each with different attributes. Each tree has its position, size, and type. However, the appearance of the leaves and the trunk's texture can be shared among multiple trees since they're identical.

> **AGENDA** : Optimizing Memory Usage in a Virtual World Simulation Game; We'll use the Flyweight pattern to optimize memory usage by sharing intrinsic properties of the trees.

1. We fist **Identify Similarity**, recognize that many trees share common parts, like their leaves and trunk textures. These parts don't need to be duplicated for every tree.


2. Next we **Divide into Intrinsic and Extrinsic Data:** Divide the tree properties into intrinsic (shared) and extrinsic (unique) data. Intrinsic data is the part that can be shared, like the texture of leaves or the trunk's color. Extrinsic data is unique to each tree, like its position and size.


3. **Create Flyweight Objects:** Create a class for the shared parts of the trees, such as the texture of leaves and trunk. These are the Flyweight objects. They should have methods to modify the intrinsic data and display the part when needed.
```TS
interface Tree {
  display(position: { x: number, y: number }): void;
}

class PineTree implements Tree {
  private texture: string;
  private color: string;
  private health: number;
  private age: number;
  private canBearFruit: boolean;

  constructor(texture: string, color: string, health: number, age: number, canBearFruit: boolean) {
    this.texture = texture;
    this.color = color;
    this.health = health;
    this.age = age;
    this.canBearFruit = canBearFruit;
  }

  display(position: { x: number, y: number }): void {
    console.log(`Displaying a pine tree at (${position.x},${position.y})`);
    console.log(`Texture: ${this.texture}, Color: ${this.color}`);
    console.log(`Health: ${this.health}, Age: ${this.age}`);
    console.log(`Can Bear Fruit: ${this.canBearFruit}`);
  }
}

class OakTree implements Tree {
  private texture: string;
  private color: string;
  private health: number;
  private age: number;
  private canBearAcorns: boolean;

  constructor(texture: string, color: string, health: number, age: number, canBearAcorns: boolean) {
    this.texture = texture;
    this.color = color;
    this.health = health;
    this.age = age;
    this.canBearAcorns = canBearAcorns;
  }

  display(position: { x: number, y: number }): void {
    console.log(`Displaying an oak tree at (${position.x},${position.y})`);
    console.log(`Texture: ${this.texture}, Color: ${this.color}`);
    console.log(`Health: ${this.health}, Age: ${this.age}`);
    console.log(`Can Bear Acorns: ${this.canBearAcorns}`);
  }
}

```

4. **Create a Factory:** Implement a Factory or Manager class responsible for creating and managing Flyweight objects. When you need a tree in the game, the factory either retrieves an existing Flyweight object with the required texture or creates a new one if it doesn't exist.
```TS
class TreeTypeFactory {
  private treeTypes: Map<string, TreeType> = new Map();

  getTreeType(texture: string, color: string, health: number, age: number, canBearFruit: boolean): TreeType {
    const key = this.getTreeTypeKey(texture, color);

    if (!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(texture, color, health, age, canBearFruit));
    }

    return this.treeTypes.get(key)!;
  }

  // ... Other methods
}
```


5. **Create Tree Objects:** For each individual tree in the game, create a Tree class that holds both intrinsic and extrinsic data. The intrinsic data (shared parts) is stored by referencing the Flyweight objects created earlier.
```TS
const treeTypeFactory = new TreeTypeFactory();

// Create trees with shared intrinsic properties
const oakTree = {
  treeType: treeTypeFactory.getTreeType("oakTexture", "green", 80, 50, false),
  position: { x: 10, y: 20 },
  size: { width: 50, height: 100 },
};

const pineTree = {
  treeType: treeTypeFactory.getTreeType("pineTexture", "green", 100, 40, true),
  position: { x: 30, y: 40 },
  size: { width: 40, height: 80 },
};
```

6. **Display Trees:** When displaying trees in the game, the Tree objects use their intrinsic data (shared parts) from the Flyweight objects. They combine this with their extrinsic data (position, size) to show the complete tree.
```TS

oakTree.treeType.display({ x: 25, y: 25 });
pineTree.treeType.display({ x: 10, y: 20 });
```
By using the Flyweight pattern in this scenario, you save memory and processing time. The shared parts of the trees are created only once and reused among different trees, reducing memory consumption and improving performance. This approach is especially useful when you have a large number of similar objects with common parts.

***

#### How it works
* The client code requests a flyweight object from the flyweight factory, providing it with extrinsic data (such as character position).
* The flyweight factory checks if a flyweight object with the requested intrinsic state (e.g., font type) already exists in its pool.
* If the flyweight object exists, the factory returns it. If not, the factory creates a new flyweight object and adds it to the pool.
* The client uses the flyweight object to render the character, with the extrinsic data provided.

### Variations of Flyweight Pattern


***

<h3 align="center">When to use Flyweight pattern over <b>other patterns</b></h3>

