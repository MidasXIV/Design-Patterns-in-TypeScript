<p>
  <h1 align="center">Design Patterns in TypeScript</h1> 
  <img src="https://user-images.githubusercontent.com/24829816/71924346-3e6fc300-31a8-11ea-8291-158e5afba3f7.png" />
</p>

<p align="center">
  <a href="#features">Creational Design Patterns</a> |
  <a href="#installation">Structural Design Patterns</a> |
  <a href="#getting-started">Behavioral Design Patterns</a>
</p>

<p align="center">
  <a href="https://discord.gg/AYrsqBG">
        <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
    </a>
  <a href="https://discord.gg/AYrsqBG">
    <img src="https://discordapp.com/api/guilds/633776704145457154/widget.png?style=shield" alt="Discord Server">
  </a>
  <a href="https://twitter.com/intent/tweet?text=Design%20Patterns%20in%20TypeScript%20&url=https://github.com/MidasXIV/Design-Patterns-in-TypeScript&hashtags=typescript,javascript,designpatterns,github">
    <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" />
  </a>
  <a href="https://github.com/MidasXIV/Design-Patterns-in-TypeScript/stargazers/">
    <img src="https://img.shields.io/github/stars/MidasXIV/Design-Patterns-in-TypeScript.svg?style=social&label=Star&maxAge=2592000" />
  </a>
</p>


> In software engineering, a software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations.

___

<h6 align="center">
 This article assumes you are reasonably proficient in at least one object-oriented programming language, and you should have some experience in object-oriented design as well. You definitely shouldn't have to rush to the nearest dictionary the moment we mention "<b>types</b>" and "<b>polymorphism</b>," or "<b>interface</b>" as opposed to "<b>implementation/<b>” inheritance.
 <br>But I'll try to keep the literature as simple as possible.
 <br><br>Don't worry if you don’t understand this article completely on the first reading. We didn’t understand it all on the first writing! Remember that this isn't an article to read once and forget it. We hope you'll find yourself referring to it again and again for design insights and for inspiration.
</h6>

___

<p>
  <h2 align="center">Creational Design Patterns</h1>
</p>

|<kbd style={width:33%;}><h3><a href="https://classroom.udacity.com/courses/ud187">Abstract Factory</a></h3><h4>Allows us to create a Factory for factory classes.<br>The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.</h4></kbd>|<kbd width="33%">  <h3><a href="https://classroom.udacity.com/courses/ud187">Prototype</a></h3><h4>Create object based on an existing object through cloning.<br>	Creating a new object instance from another similar instance and then modify according to our requirements.</h4></kbd>|<kbd><h3><a href="https://classroom.udacity.com/courses/ud187">Builder</a></h3><h4>Creating an object step by step and a method to finally get the object instance.<br>Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.</h4></kbd>|
|:-|:-|:-|
|<kbd><h3><a href="https://classroom.udacity.com/courses/ud187">Singleton</a></h3><h4>In Ensures that only one object of a particular class is ever created.<br>Singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.</h4></kbd>|<kbd>  <h3><a href="https://classroom.udacity.com/courses/ud187">Factory Method</a></h3>  <h4>The factory pattern takes out the responsibility of instantiating a object from the class to a Factory class.<br>Creates an instance of several derived classes.</h4></kbd>|<kbd><h3><a href="https://classroom.udacity.com/courses/ud187">Object Pool Design Pattern</a></h3><h4>Object pools are used to manage the object caching.<br>Avoid expensive acquisition and release of resources by recycling objects that are no longer in use.</h4></kbd>|


| Thumbnail       | Design Pattern                                                                   |
| :-------------: | :------------------------------------------------------------------------------- |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Factory Method](https://classroom.udacity.com/courses/ud187) <h6>The factory pattern takes out the responsibility of instantiating a object from the class to a Factory class.<br>Creates an instance of several derived classes.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Abstract Factory](https://classroom.udacity.com/courses/ud187) <h6>Allows us to create a Factory for factory classes.<br>The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Builder](https://classroom.udacity.com/courses/ud187) <h6>Creating an object step by step and a method to finally get the object instance.<br>Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Prototype](https://classroom.udacity.com/courses/ud187) <h6>Create object based on an existing object through cloning.<br>	Creating a new object instance from another similar instance and then modify according to our requirements.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Singleton](https://classroom.udacity.com/courses/ud187) <h6>In Ensures that only one object of a particular class is ever created.<br>Singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Object Pool Design Pattern](https://classroom.udacity.com/courses/ud187) <h6>Object pools are used to manage the object caching.<br>Avoid expensive acquisition and release of resources by recycling objects that are no longer in use.</h6>  |

___

<p>
  <h2 align="center">Structural design patterns</h1>
</p>

| Thumbnail       | Design Pattern                                                                   |
| :-------------: | :------------------------------------------------------------------------------- |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Adapter](https://classroom.udacity.com/courses/ud187) <h6>Provides an interface between two unrelated entities so that they can work together.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Composite](https://classroom.udacity.com/courses/ud187) <h6>	Used when we have to implement a part-whole hierarchy. For example, a diagram made of other pieces such as circle, square, triangle, etc.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Proxy](https://classroom.udacity.com/courses/ud187) <h6>	Provide a surrogate or placeholder for another object to control access to it.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Flyweight](https://classroom.udacity.com/courses/ud187) <h6>	Caching and reusing object instances, used with immutable objects. For example, string pool.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Facade](https://classroom.udacity.com/courses/ud187) <h6>	Creating a wrapper interfaces on top of existing interfaces to help client applications.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Bridge](https://classroom.udacity.com/courses/ud187) <h6>	The bridge design pattern is used to decouple the interfaces from implementation and hiding the implementation details from the client program.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Decorator](https://classroom.udacity.com/courses/ud187) <h6>	The decorator design pattern is used to modify the functionality of an object at runtime.</h6>  |

___

<p>
  <h2 align="center">Behavioral Design Patterns</h1>
</p>

| Thumbnail       | Design Pattern                                                                   |
| :-------------: | :------------------------------------------------------------------------------- |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Template Method](https://classroom.udacity.com/courses/ud187) <h6>	used to create a template method stub and defer some of the steps of implementation to the subclasses.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Mediator](https://classroom.udacity.com/courses/ud187) <h6>used to provide a centralized communication medium between different objects in a system.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Chain of Responsibility](https://classroom.udacity.com/courses/ud187) <h6>	used to achieve loose coupling in software design where a request from the client is passed to a chain of objects to process them.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Observer](https://classroom.udacity.com/courses/ud187) <h6>	useful when you are interested in the state of an object and want to get notified whenever there is any change.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Strategy](https://classroom.udacity.com/courses/ud187) <h6>	Strategy pattern is used when we have multiple algorithm for a specific task and client decides the actual implementation to be used at runtime.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Command](https://classroom.udacity.com/courses/ud187) <h6>	Command Pattern is used to implement lose coupling in a request-response model.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [State](https://classroom.udacity.com/courses/ud187) <h6>	State design pattern is used when an Object change it’s behavior based on it’s internal state.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Visitor](https://classroom.udacity.com/courses/ud187) <h6>	Visitor pattern is used when we have to perform an operation on a group of similar kind of Objects.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Interpreter](https://classroom.udacity.com/courses/ud187) <h6>	defines a grammatical representation for a language and provides an interpreter to deal with this grammar.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Iterator](https://classroom.udacity.com/courses/ud187) <h6>	used to provide a standard way to traverse through a group of Objects.</h6>  |
| <img src="https://images.squarespace-cdn.com/content/5108795ce4b04beb3ec2886e/1550776903598-G2JSY8UJ22MJG86HNPOV/udacity-logo.jpg?format=500w&content-type=image%2Fjpeg" alt="Udacity" width="150"/>| [Memento](https://classroom.udacity.com/courses/ud187) <h6>	The memento design pattern is used when we want to save the state of an object so that we can restore later on.</h6>  |

___


### Conclusion

> Once you understand the design patterns and have had an "**Aha!**" (and not just a "Huh?") experience with them, you won't ever think about object-oriented design in the same way.

The intent of this Article is provide you with insights that can make your own designs more flexible, modular, reusable, and understandable.
___

### Credits

> Inspiration -> [Ahmed Kamran](https://twitter.com/kamranahmedse)
