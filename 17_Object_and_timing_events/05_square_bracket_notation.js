var student = {
    "name" : "abc",
    rollNo : 135, 
    marks : 90,
    "2" : "two"
};

// square bracket
console.log(student["marks"]);

console.log(student);
// console.log(student.2); // we cannot access key starting with num or having only num
console.log(student["2"]);

function printProperty(obj, prop){
    // console.log(obj.prop); // this will print undefind
    console.log(obj[prop]);
}

var prop = "name";
printProperty(student, prop);

