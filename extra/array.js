// Using array.filter

let arr2 = [250,150,100,450,500]
let result = arr2.filter(arr2 => arr2 > 200)
console.log(result)


// Using array.from

console.log(Array.from("Nikhil"))
console.log(Array.from([1,2,3,4],x => x*2))


// Using array.pop
const name1 = ["nikhil" , "rahul" , " mayank" , "divyansh"]
name1.pop()
console.log(name1)


// Using array.push

const name = ["nikhil" , "rahul" , " mayank" , "divyansh"]
name.push("tushar")
console.log(name)


// Using array.reverse

const arr = ["one","two","three"]
const rev = arr.reverse()
console.log(rev)


// Using array.shift

const arr3 = [1,"two",3,"four"]
const first = arr3.shift()
console.log(arr3)
console.log(first)


// Using array.slice


const arr4 = ["nikhil", "tushar","divyansh","pranav","rahul"]
result = arr4.slice(2,5)
result1 = arr4.slice(3)

console.log(result)
console.log(result1)


// Using array.splice

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
// 0 means insert and 1 means replace



// Using array.find

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(item => item > 10);

console.log(found);
// expected output: 12


// Using array.join

const array2 = ["nikhil","is","a","trainee","engineer"]
console.log(array2.join(" "))
