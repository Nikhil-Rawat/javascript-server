// Using array.filter()
console.log("aarray.filter()")
let arrFilter = [250,150,100,450,500]
let result = arrFilter.filter(arrFilter => arrFilter > 200)
console.log(result)
console.log("")


// Using array.from
console.log("array.from()")
console.log(Array.from("Nikhil"))
console.log(Array.from([1,2,3,4],x => x*2))
console.log("")

// Using array.pop
console.log("array.pop()")
const namePop = ["nikhil" , "rahul" , " mayank" , "divyansh"]
namePop.pop()
console.log(namePop)
console.log("")


// Using array.push
console.log("array.push()")
const namePush = ["nikhil" , "rahul" , " mayank" , "divyansh"]
namePush.push("tushar")
console.log(namePush)
console.log("")


// Using array.reverse
console.log("array.reverse()")
const arrReverse = ["one","two","three"]
const rev = arrReverse.reverse()
console.log(rev)
console.log("")


// Using array.shift
console.log("array.shift()")
const arrShift = [1,"two",3,"four"]
const first = arrShift.shift()
console.log(arrShift)
console.log(first)
console.log("")


// Using array.slice
console.log("array.slice()")
const arrSlice = ["nikhil", "tushar","divyansh","pranav","rahul"]
result = arrSlice.slice(2,5)
result1 = arrSlice.slice(3)
console.log(result)
console.log(result1)
console.log("")

// Using array.splice
console.log("array.splice()")
const monthSplice = ['Jan', 'March', 'April', 'June'];
monthSplice.splice(1, 0, 'Feb');
console.log(monthSplice);
monthSplice.splice(4, 1, 'May');
console.log(monthSplice);
console.log("")


// Using array.find
console.log("array.find()")
const arrayFind = [5, 12, 8, 130, 44];
const found = arrayFind.find(item => item > 10);
console.log(found);
console.log("")


// Using array.join
const arrayJoin = ["nikhil","is","a","trainee","engineer"]
console.log(arrayJoin.join(" "))


// Using array.concat
console.log("array.concat")
const arrayConcat1 = ['a', 'b', 'c'];
const arrayConcat2 = ['d', 'e', 'f'];
const arrayConcat3 = arrayConcat1.concat(arrayConcat2);
console.log(arrayConcat3);
console.log("")


// Using array.entries
console.log("array.entries()")
const arrayEntries = ['a', 'b', 'c'];
const iteratorEntries = arrayEntries.entries();
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log("")


// Using array.flat
console.log("array.flat()")
const arrFlat = [0, 1, 2, [3, 4]];
console.log(arrFlat.flat());
const arrFlat2 = [0, 1, 2, [[[3, 4]]]];
console.log(arrFlat2.flat(3));
console.log("")


// Using array.includes
console.log("array.log()")
const arrayIncludes = [1, 2, 3];
console.log(arrayIncludes.includes(2));
const petsIncludes = ['cat', 'dog', 'bat'];
console.log(petsIncludes.includes('cat'));
console.log(petsIncludes.includes('at'));
console.log("")



// Using array.map()
console.log("array.map")
const arrayMap = [1, 4, 9, 16];
const map1 = arrayMap.map(x => x * 2);
console.log(map1);
console.log("")


// Using aaray.reduce()
console.log("array.reduce()")
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));
console.log("")


// Using array.some()
console.log("array.some()")
const arraySome = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(arraySome.some(even));
console.log("")


// Using array.every()
console.log("array.every()")
const isBelowThreshold = (currentValue) => currentValue < 40;
const arrayEvery = [1, 30, 39, 29, 10, 13];
console.log(arrayEvery.every(isBelowThreshold));
console.log("")


// Using array.forEach()
console.log("array.forEach()")
const arrayFE = ['a', 'b', 'c'];
arrayFE.forEach(element => console.log(element));
console.log("")


// Using array.reduceRight()
console.log("array.reduceRight()")
const arrayRR = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
console.log(arrayRR);
