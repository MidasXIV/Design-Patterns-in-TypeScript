<p>
  <h1 align="center">Unified Modeling Language</h1> 
  <img src="https://user-images.githubusercontent.com/24829816/72670081-b9f82c80-3a52-11ea-91d1-c575ee525f67.png" />
</p>

> UML, short for Unified Modeling Language, is a visual language filled with drawing notation and semantics used to create models of programs. UML is used to express the design of software Designs, patterns and architecture.

***

## Why to Learn UML

* The UML is not only a better way of describing object-oriented designs. It also forces the designer to think through the relationships between classes in their approach as it needs to be written.

* Complex applications need collaboration and planning from multiple teams and hence require a clear and concise way to communicate among them.

***

## Unified Modelling language - Basics

### :arrow_right: Abstract Class

<img align="left" src="https://www.plantuml.com/plantuml/img/FOv12eD034NtSuf0DnRf7PGUmLLNGve95XexagGhyUuThSxVlHV8_vqvgdyd2VWqLoG74ZI3Eoei0KfQW4XPikvqWJZbn581t_nW_1zl46rcJZiSPjWAcckbF5VeYOGLdG-pd1jMe1VgUFeMHlPXUrp46Zh-fBBu1m00">

> Abstract class is a class which may have some unimplemented methods. These methods are called abstract methods. We can't create an instance of an abstract class. But other classes can be derived from abstract class and reuse the functionality of base class.<br>
* Abstract keyword before the method name.
* Abstract method does not have any implementation.


### :arrow_right: Class Diagram

<h6>A class is depicted as a rectangle with the class name in bold. Any data that the class defines comes after the class name. Operations appear in normal type below the class attributes. Lines separate the class name from the operations and the operations from the data.</h6>

***

### :arrow_right: Class Attributes Visibility

<h6>Describes the accessibility of an attribute of a class,these notations must be placed before the member's name.</h6>

| `Access Right`              |`public (+)`|`private (-)`| `protected (#)`| `Package (~)`  |
| :-------------------------- |:---------: | :-----------: | :-----------: | :-----------: |
| `Members of the same class` | `yes`      |`yes`          |	`yes`        |	`yes`        |
| `Members of derived classes`| `yes`      |`no`           |	`yes`        |	`yes`        |
| `Members of any other class`| `yes`      |`no`           |	`no`         |	`in same package` |

***

### :arrow_right: Aggregation

<h6>There are actually  two  different  kinds  of  <u><i>has-a</i></u> relationships. One object can have another object where the contained object is a part of  the containing object — <u>or not</u>.<br>
For example a 'Car Showroom' "has" Cars. Cars are not part of 'Car Showroom', but I can still  say  that a  'Car Showroom'  has  them.  This  type  of  relationship  is  called  <u>aggregation</u>.

</h6>


***


### :arrow_right: Composition

<h6>The  other  type  of <u>has-a</u> relationship  is  where  the  containment  means the contained object is a part of the containing object. This type of relationship is also called composition.<br>
A  Car  has  Tires  as  parts  (that  is,  the  Car  is  made  up  of  Tires  and  other  things).  This  type  of  <u>has-a</u> relationship, called composition, is  depicted  by  the  filled  in  diamond.<br>
Both  composition  and  aggregation  involve  one  object  containing  one  or  more  objects.  Composition,  however,  implies  the  contained  object  is  a  part  of  the  containing  object,  whereas  aggregation  means  the  contained  objects  are  more  like  a  collection  of  things. 
</h6>

***


### :arrow_right: Dependency

<img align="left" src="https://www.plantuml.com/plantuml/img/SoWkIImgAStDuN9EB5BGqxDJS4yi3Yv9BCdCprEmKaX9BKZDIqdDIwxaSW0oWEe0">

<h6>
Dependency is a weaker form of bond that indicates that one class depends on another because it uses it at some point in time. One class depends on another if the independent class is a parameter variable or local variable of a method of the dependent class.<br>
For example, This  diagram shows that a Car uses a 'GasStation'. The <u>uses</u> relationship  is  depicted  by  a  dashed  line  with  an  arrow.  This  is  also  called  a  dependency relationship.
</h6>

***
<br><br>
### :arrow_right: Inheritance

<img align="left" width="250" src="https://www.plantuml.com/plantuml/img/SoWkIImgAStDuN9EB5AmgT7LLGXEJKdCG-A6XY4u7eaboHb9YSdPN0wfUIb0RG00">

<h6>Inheritance is a mechanism by which child classes inherit the properties of their parent classes. The easiest way to understand Inheritance is to think of it as a <u>is-a</u> relationship.<br>
for example, <b>Sedan</b> <u>is-a</u> a type of <b>car</b>, <b>Hatchback </b> <u>is-a</u> a type of <b>car</b> just like <b>SUV</b> <u>is-a</u> a type of <b>car</b></h6>

***
