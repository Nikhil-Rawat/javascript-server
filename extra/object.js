// Using object.assign

const target = {name : "Nikhil", age:23, gender: "male"}
const source = {name : "Nikhil", age:24, hobbies: ["esport","reading"]}
Object.assign(target,source)
console.log(target)


// Using Object.create
const user = {job_description:"trainee engineer", Introduction : function () {
    console.log(`My name is ${this.name} & I am a ${this.job_description}`)
    }
}
const me = Object.create(user);
me.name = "Nikhil"
me.job_description = "Software Engineer"
me.Introduction();


// Using Object.defineproperties

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


// Using Object.entries

const user1 = {
    name : "Nikhil",
    age : 23,
    gender : "male",
}
for(const [key,value] of Object.entries(user1)){
    console.log(key,value);
}


// Using Object.freeze

let name = {
    property : "Nikhil"
}
Object.freeze(name)
name.property = "akhil";
console.log(name.property);


// Using object.is

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


// Using Object.seal

const sample_object = {
    prop : 23
}
Object.seal(sample_object);
sample_object.prop = 34;
console.log(sample_object.prop)
delete sample_object.prop;
console.log(sample_object.prop)



// Using Object.isSealed

const sample_object2 = {
    prop : 23
}
console.log(Object.isSealed(sample_object2))
Object.seal(sample_object2);
console.log(Object.isSealed(sample_object2))


// Using private.extension

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

  // Using isextensible

  const object2 = {};

console.log(Object.isExtensible(object2));
// expected output: true

Object.preventExtensions(object2);

console.log(Object.isExtensible(object2));
// expected output: false
