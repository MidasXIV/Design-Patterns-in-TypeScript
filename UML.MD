<h6>UML, short for Unified Modeling Language, is a visual language filled with drawing notation and semantics used to create models of programs. UML is very important part of developing object oriented software and the software development process. The UML uses mostly graphical notations to express the design of software Designs, patterns and architecture.</h6>

***

`This Article is continuation of my previous article about the 'Object' in 'Object Oriented programming'.`


{% post midasxiv/object-oriented-programming-dealing-with-changing-requirements-cbh %}

`This article will give you minimal understanding you need to be able to read the diagram associated with Design Patterns and Design Principles`

***

`link to the repository I maintain regarding this at the bottom of the article.`

***

# Why to Learn UML

:small_orange_diamond: The UML is not only a better way of describing object-oriented designs. It also forces the designer to think through the relationships between classes in their approach as it needs to be written.

:small_orange_diamond: Complex applications need collaboration and planning from multiple teams and hence require a clear and concise way to communicate among them.

## Unified Modelling language - Basics

### :arrow_right: Class Diagram

<h6>A class is depicted as a rectangle with the class name in bold. Any data that the class defines comes after the class name. Operations appear in normal type below the class attributes. Lines separate the class name from the operations and the operations from the data.</h6>

***

### :arrow_right: Class Attributes Visibility

<h6>Describes the accessibility of an attribute of a class,these notations must be placed before the member's name.</h6>

| Symbol| Term        | Definition |
| :-:   | :---------- | :--- |
| `+`   | `Public`    | `All objects can access this data or method.`
| `-`   | `Private`   | `Only  methods  of  this  class  can  access  this  data or method.`|
| `#`   | `Protected` | `Only  this  class  and  all  of  its  derivations can  access  this  data  or  method.` |
| `~`   | `Package`   | `Members of the same class,  derived classes, of any other class from the Same package.`|

| `Access Right`|`public (+)`|`private (-)`| `protected (#)`| `Package (~)`  |
| :------------ |:---------: | :-----------: | :-----------: | :-----------: |
| `Members of the same class` | `yes`  |`yes` |	`yes` |	`yes`  |
| `Members of derived classes`| `yes`  |`no`  |	`yes` |	`yes`  |
| `Members of any other class`| `yes`  |`no`  |	`no`  |	`in same package` |


![class](https://user-images.githubusercontent.com/24829816/72670081-b9f82c80-3a52-11ea-91d1-c575ee525f67.png)

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

<h6>
Dependency is a weaker form of bond that indicates that one class depends on another because it uses it at some point in time. One class depends on another if the independent class is a parameter variable or local variable of a method of the dependent class.<br>
For example, This  diagram shows that a Car uses a 'GasStation'. The <u>uses</u> relationship  is  depicted  by  a  dashed  line  with  an  arrow.  This  is  also  called  a  dependency relationship.
</h6>

***

### :arrow_right: Inheritance

<h6>Inheritance is a mechanism by which child classes inherit the properties of their parent classes. The easiest way to understand Inheritance is to think of it as a <u>is-a</u> relationship.<br>
for example, <b>Sedan</b> <u>is-a</u> a type of <b>car</b>, <b>Hatchback </b> <u>is-a</u> a type of <b>car</b> just like <b>SUV</b> <u>is-a</u> a type of <b>car</b></h6>

***
