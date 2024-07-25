
// always create function first before initialization or bcz this is call by reference
const arrow = ()=>{
    return "Hi there"
}

const object = {
    name: "Ali",
    age: 27,
    array: [2,3],
    arrow: arrow,
    course:{
        name: "Mern-21"
    }

}

// this call all objects or show all value we add
console.log(object);

// this show the array value at specific index
console.log(object.array[0]);

// this show we get value of object a specific value
console.log(object.course);

// this show only objects key in our object like name age etc.
console.log(Object.keys(object));

// this show only object values like Ali 27 etc.
console.log(Object.values(object));
// this show all data in the form of array.
console.log(Object.entries(object));