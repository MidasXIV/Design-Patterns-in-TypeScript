<p>
  <h1 align="center">Adapter Pattern</h1>
  <img src="https://user-images.githubusercontent.com/24829816/71723836-8ceb2d80-2e47-11ea-821f-7fb2bd6ba240.png" />
</p>

> The intent of the Design Pattern is to convert the **interface** of a class into another **interface** that the **clients** expect. Adapter lets classes work together that could not otherwise because of **incompatible** interfaces.

##### So in simple terms the Adapter Pattern is used to Wrap an existing class with a new interface, it works as a bridge between two incompatible interfaces. This pattern involves a single class called adapter which is responsible for communication between two independent or incompatible interfaces.

***

### The easiest way to understand the intent of the Adapter pattern is to look at examples of where it is useful.

Let's say you wanted to use a method or a subroutine that someone else has written because it performs some function that you need, but you cannot incorporate the routine directly into your program;

As it maybe a third party software so you cannot make changes to their code and also you don’t want to solve the problem by changing your existing code. 

Or simply the interface or the way of calling the routine is not exactly consistent or equivalent to the way that is related objects need to use it.

***

### Steps to implementing the adapter pattern. 

> **AGENDA** : The Adapter pattern allows otherwise incompatible classes to work together by converting the interface of one class into an interface expected by the clients. 

1. First we identify the component(s) that want to be accommodated (i.e. the client), and the component that needs to adapt (i.e. the adaptee).

2. Then identify the interface that the client requires.

3. Design a adapter/wrapper class that can match the adaptee functions to the client's requirements.

4. The adapter/wrapper class "has a" instance of the adaptee class.

5. The adapter/wrapper class "maps" the client interface to the adaptee interface.

6. The client uses the new interface.

***