// Using object.assign

const target = {name : "Nikhil", age:23, gender: "male"}
const source = {name : "Nikhil", age:24, hobbies: ["esport","reading"]}
Object.assign(target,source)
console.log("Object.assign()")
console.log(target)
console.log("")


// Using Object.create
console.log("Object.create()");
const user = {job_description:"trainee engineer", Introduction : function () {
    console.log(`My name is ${this.name} & I am a ${this.job_description}`)
    }
}
const me = Object.create(user);
me.name = "Nikhil"
me.job_description = "Software Engineer"
me.Introduction();
console.log("")

// Using Object.defineproperties
console.log("Object.defineProperties()")
const data = {}
Object.defineProperties(data, {
    properties1 : {
        value : 73,
        writable : true
    },
    properties2 : {
        value : 785,
        writable : true
    }
}
)
console.log(data.properties2);
console.log(data.properties1);
console.log("")

// Using Object.entries
console.log("Object.entries()")
const user1 = {
    name : "Nikhil",
    age : 23,
    gender : "male",
}
for(const [key,value] of Object.entries(user1)){
    console.log(key,value);
}
console.log("")

// Using Object.freeze
console.log("Object.freeze()")
let name = {
    property : "Nikhil"
}
Object.freeze(name)
name.property = "akhil";
console.log(name.property);
console.log("")

// Using object.is
console.log("Object.is()")
const user2 = { first : {
    name : "Nikhil",
    age : 23
},
second : {
    name : "Nikhil",
    age : 22
}
}
console.log(Object.is(user2.first,user2.second))
console.log("")

// Using Object.seal
console.log("Object.seal()")
const sample_object = {
    prop : 23
}
Object.seal(sample_object);
sample_object.prop = 34;
console.log(sample_object.prop)
delete sample_object.prop;
console.log(sample_object.prop)
console.log("")


// Using Object.isSealed
console.log("Object.isSealed()")
const sample_object2 = {
    prop : 23
}
console.log(Object.isSealed(sample_object2))
Object.seal(sample_object2);
console.log(Object.isSealed(sample_object2))
console.log("")

// Using private.extension
console.log("Object.privateExtensions()")
const object1 = {};

Object.preventExtensions(object1);

try {
    Object.defineProperty(object1, 'property1', {
      value: 42
    });
  } catch (e) {
    console.log(e);
    // expected output: TypeError: Cannot define property property1, object is not extensible
  }
console.log("")



// Using isextensible
console.log("Object.isExtensible()")
const object2 = {};

console.log(Object.isExtensible(object2));
// expected output: true

Object.preventExtensions(object2);

console.log(Object.isExtensible(object2));
// expected output: false
