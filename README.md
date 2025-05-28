# Learn JavaScript Classes, Objects & Functions

### Keywords

|            |                   |              |            |                 |
| ---------- | ----------------- | ------------ | ---------- | --------------- |
| **class**  | **constructor()** | **get**      | **getter** | **inheritance** |
| **method** | **new**           | **property** | **set**    | **setter**      |
| **super**  | **this**          |              |            |                 |

### Purpose

This exercise practices creating object classes with associated properties and methods then defining subclasses that extend the functionality of the superclass.

Create a **_media_** library that stores details of books, movies and CDs.

| Class      | Properties   | Getters      | Setter       | Methods              |
| ---------- | ------------ | ------------ | ------------ | -------------------- |
| **Media**  | title        | title        | isCheckedOut | toggleCheckOutStatus |
|            | isCheckedOut | isCheckedOut |              | getAverageRating     |
|            | ratings      | ratings      |              | addRating            |
| **Book**   | title        | author       |              |                      |
|            | isCheckedOut | pages        |              |                      |
|            | ratings      |              |              |                      |
|            | author       |              |              |                      |
|            | pages        |              |              |                      |
| **Movies** | title        | director     |              |                      |
|            | isCheckedOut | runTime      |              |                      |
|            | ratings      |              |              |                      |
|            | director     |              |              |                      |
|            | runTime      |              |              |                      |
| **CD**     | title        | artist       |              |                      |
|            | isCheckedOut | songs        |              |                      |
|            | ratings      |              |              |                      |
|            | artist       |              |              |                      |
|            | songs        |              |              |                      |

Above table shows each class an the associated properties and methods. Note that the superclass defines common properties and methods (title | isCheckedOut | ratings). Additionally subclasses have access to the superclass getters, setters and methods (**inheritance**).

The subclasses **_extend_** the properties of the superclass e.g. Books have authors and pages whilst Movies have directors and runTime.

### Defining classes

Use the keyword `class` followed by the name of the class. By convention class names start with an upper case letter and follow camelCase.

### Constructor

The `constructor()` is a **_factory_** method which does the bulk of the work creating consistent instances of objects. The constructor creates all the properties and methods. Constructors must be passed arguments which match the classes properties.

Each subclass which extends its parent class will also have a constructor but important differences include

- Defines it's own properties
- Based on properties will potentially have different getter and setter methods
- Must always call `super(arguments...)` in the first line of the constructor.

`super()` references the parent (super) class

### Creating object instances

When you create an object you actually create a copy / instance of the defining class.

`new Move(arg1, arg2, arg...);` **_NOTE_** the `new` keyword

**_NOTE: Always assign to a _**const**_ variable_**

### this

`this` always refers to the calling object. So if an object had a property of title then `this.title` would reference that property

### Privacy

In most cases you don't want to grant direct access to the internals of objects however within JavaScript there is no technical way to prevent this. So instead a convention as been defined. `_propertyName` indicates to other programmers that this property should not be directly accessed or changed. Instead use `getters` `setters` or `methods` to retrieve and or change properties

### Calling getters, setters and methods

When calling getters omit the `()` `console.log(speed.isCheckedOut);`. However because setters fundamentally change a property they will always require an argument `speed.addRating(3);`

For **methods** call as you would any normal function i.e. use `()` after the function name `speed.getAverageRating();`

### Summary

This was a relatively simple project to complete, the principles of classes, inheritance and objects as well as creating classes and objects was pretty straight forward. The were a couple of points to note:

1. When defining class methods which access class properties you **never** need to directly use the property itself inside the class, rather call which ever getter method required.

2. I wanted to extend the functionality of the `addRating()` function. In the Codecademy solution the function was called directly with an argument provided e.g. `speed.addRating(3);`. But I wanted to extend the function by asking the user to add a rating as part of a prompt. However my first try broke the `getAverageRating()` function. I couldn't understand why, when entering the ratings of 1, 3 and 5 I was getting an average rating of **45**. Why was this happening? Look at my first iteration:

```js
addRating() {
    let customerRating = prompt("Enter your rating 1-5: ");
    this._ratings.push(customerRating);
}
```

What's wrong with this?

So, by default `prompt` will return a **string** so in this instance the ratings array contained ["1", "3", "5"]; 3 Strings not numbers. When passed to the `getAverageRating()` function these were **concatenated** resulting in the number **135** which is then dived by the length of ratings with the final result being 45 not 3. To solve this:

```js
let customerRating = parseInt(prompt("Enter your rating 1-5: "));

See my-app.js lines 38-47
```


[JS Project Build a Library](https://youtu.be/_7HStd1Vhlc)
