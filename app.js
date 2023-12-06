// create object
const person1 ={
    fname :"Ahmed",
    lname :"Hossam",
    age: 20,
    city : "Alex",
} 
 console.log(person1.fname)
//  obj to json
const person1JSON = JSON.stringify(person1)
console.log(person1JSON)
// json to obj
const person1OBJ = JSON.parse(person1JSON)
console.log(person1OBJ)
// updated data
fname = 'Ahmed';
lname ="Adel",
age = 40;
city = 'cairo';
// read file
const data = fs.readFileSync("person.json");

// store
fs.writeFileSync("data.json",person1JSON)