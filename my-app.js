const prompt = require("prompt-sync")();

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentValue, value) => currentValue + value
    );
    console.log(ratingsSum);
    return ratingsSum / this._ratings.length;
  }

  addRating() {
    let customerRating = parseInt(prompt("Enter your rating 1-5: "));
    if (customerRating >= 1 && customerRating <= 5) {
      this._ratings.push(customerRating);
    } else {
      console.log("You need to enter a number between 1 & 5");
      customerRating = parseInt(prompt("Enter your rating 1-5: "));
      this.ratings.push(customerRating);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class Cd extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

// const historyOfEverything = new Book(
//   "Bill Bryson",
//   "A Short History of Nearly Everything",
//   544
// );
// historyOfEverything.toggleCheckOutStatus();
// historyOfEverything.addRating(-2);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating();
console.log(speed.ratings);
speed.addRating();
console.log(speed.ratings);
speed.addRating();
console.log(speed.ratings);

console.log(speed.getAverageRating());
