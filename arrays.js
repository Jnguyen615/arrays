var names = ["Allie", "Natasha", "Meryl", "Ayla", "Annette"]
var ages = [25, 37, 37, 27, 35]
var bool = [25<37, 37>27, 35<37, 35>25]

// The pop method will remove the last index and return just that index. Which in array1 will be Annette.  
var new_array = names.pop();
console.log(new_array)

// The unshift method adds and element to the array and returns the total number of indexes within that array. In array2  it would be 6. 
var new_array2 = ages.unshift(40)
console.log(new_array2)

// The slice method is trickier, it takes two numbers and removes indexes based on the numbers listed. In this case it will return indexes 1-3, all true in this case. Slice take the first number up to the 4th but not the 4th and slices the rest of the indexes out. 
var new_array3 = bool.slice(1,4)
console.log(new_array3)

