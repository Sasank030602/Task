// Create a student object with nested address

const student = {
    Name: "Sasank",
    Age: 23,
    Course: "B.Tech",
    BirthDay: "03 June 2002",
    Address: {
        Street: "Old Market Street",
        City: "Vinukonda",
        District: "Palnadu",
        State: "Andhra Pradesh",
        Pincode: 522647
    }
};
console.log(student.Name);
console.log(student.Age);
console.log(student.Course);
console.log(student.BirthDay);
console.log(student.Address.Street);
console.log(student.Address.City);
console.log(student.Address.District);
console.log(student.Address.State);
console.log(student.Address.Pincode);



// Safely access missing property using ?.

console.log(student.address?.city);



// Loop through object and priont all keys & values

for (let key in student) {
  console.log(key + ": " + student[key]);
}



// Copy an object and change a property , also add a new property

const updatedStudent = {
    ...student,
    Address: {
        ...student.Address,
        City: "Narasaraopeta"
    },
    Email: "chenchusasanksasi99@gmail.com"
};
console.log(updatedStudent);



// Decide whetehr to sue array or object for:
//     List of Marks 
//     User profile
//     Shopping Cart items

const marks = [85, 90, 78];
const students = {
    name: "Sasank",
    age: 23,
    BirthDay: "03-June-2002",
    Address: {
        City: "Vinukonda",
        State: "Andhra Pradesh",
        Country: "India"
}
};
const cart = [
    { item: "Laptop", price: 50000 },
    { item: "Mouse", price: 500 },
    { item: "Bi-Cycle", price: 4500 },
    { item: "College Bag", price: 400}
];



// Create an object named as compnay with nested departments with name descripiton and id of each department
//     Loop and print the details
//     use Optional Chaining in at least one place

const company = {
  name: "TechCorp",
  departments: {
    dev: { id: 1, name: "Web Developer", description: "Builds Websites" },
    hr: { id: 2, name: "HR", description: "Manages Employees" },
    ops: { id: 3, name: "Operations", description: "Handles Operations" }
  }
};
Object.values(company.departments).forEach(d =>
  console.log(d?.id, d?.name, d?.description)
);



// Create an object book with title, author, rating
// Update the rating of the book
// Add a function describe() that needs to log the "Book by an author named as [author name]"

const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  rating: 4.5,
  describe() {
    console.log(`Title is ${this.title} and Book by an author named as ${this.author} and Rating is ${this.rating}`);
  }
};
book.rating = 4.8;
book.describe();



// Create a object fro a movie, a product, for a user profile

const movie = {
    title: "Harry Potter",
    director: "David Yates",
    rating: 8.1,
    releaseYear: 2010
};
const product = {
    name: "Laptop",
    brand: "Dell",
    price: 155000,
    stock: 15
};
const userProfile = {
    name: "Sasank",
    age: 23,
    email: "chenchusasanksasi99@gmail.com",
    city: "Vinukonda"
};
console.log(movie);
console.log(product);
console.log(userProfile);



// try use this method

const studentss = {
    name: "Sasank",
    age: 23,
    BirthDay: "03-June-2002",
    Address: {
        City: "Vinukonda",
        State: "Andhra Pradesh",
        Country: "India"
    },
    details() {
        console.log(`${this.name} is from ${this.Address.City}`);
    }
};
studentss.details();


