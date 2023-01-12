// var names = ["Allie", "Natasha", "Meryl", "Ayla", "Annette"]
// var ages = [25, 37, 37, 27, 35]
// var bool = [25<37, 37>27, 35<37, 35>25]

// // The pop method will remove the last index and return just that index. Which in array1 will be Annette.  
// var new_array = names.pop();
// console.log(new_array)

// // The unshift method adds and element to the array and returns the total number of indexes within that array. In array2  it would be 6. 
// var new_array2 = ages.unshift(40)
// console.log(new_array2)

// // The slice method is trickier, it takes two numbers and removes indexes based on the numbers listed. In this case it will return indexes 1-3, all true in this case. Slice take the first number up to the 4th but not the 4th and slices the rest of the indexes out. 
// var new_array3 = bool.slice(1,4)
// console.log(new_array3)

var teachers = ["Brittany", "Khalid", "Travis", "Leta"];

// Access the element with "Khald"
// console.log(teachers[1]);
// Access the string "Leta"
// console.log(teachers[3]);
// Add "Pam" to the end of the list of teachers
// teachers.push("Pam");
// console.log(teachers);
// Add "Robbie" to the end of the list of teachers
// teachers.push("Robbie");
// console.log(teachers)
// Change "Robbie" to "Bobo" (that's his nickname😜)

// Print each name to the console. Think back to Mod 0 and our array lesson (and go look at it if necessary!) - what's an efficient way to do that?
// console.log(teachers[0]);
// console.log(teachers[1]);
// console.log(teachers[2]);
// console.log(teachers[3]);
// console.log(teachers[4]);
// console.log(teachers[5])
// console.log(teachers[0-5]);

// // Print each teachers name, in ALL CAPS to the console!
// // for (i = 0; i < teachers.length; i++) {
// //   teachers[i] = teachers[i].toUpperCase();
// // }  

// console.log(teachers.map(a => a.toUpperCase()));
// // Print "[teachername] is awesome!" for each teacher.

// // Print the name of every teacher who has more than 4 characters in their name.
// for (var i = 0; i < teachers.length; i++) 
//   if (teachers[i].length > 4) {
//     console.log(teachers[i]);
//   }  
// }

// // Write a function. It can take the array as an arg or just reference the global array, either way is fine. This function should return all names that include the letter "a"
// // function checkNames() {
//   for (var teach of teachers) {
//     if (teach.includes ("a")) {
//       console.log(teach)
//     }
//   }
    
var pups = [
  {name: "Sodie", age:8, faveSnack: "carrots"},
  {name: "Toph", age: 1, faveSnack: "steak"},
  {name: "Luna", age:1, faveSnack: "TBD"}
];
console.log(pups)
for(var pup of pups) {
  console.log(pup.name);
}
for (var pup of pups) {
  console.log(pup.age);
}
for (pup of pups){
  console.log(pup.faveSnack);
}
for (var pup of pups) {
  console.log(`${pup.name} loves to eat ${pup.faveSnack}!`);
}
function findPuppies(){
  for (var i = 0; i < pups.length; i++) {


  }
} 
// function totalAge(age1, age2, age3) {
//   var sum = age1 + age2 + age3;
//   return sum;
// }
// console.log(totalAge(8, 1, 1));