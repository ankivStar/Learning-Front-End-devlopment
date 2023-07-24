var student = {
    "name" : "abc",
    rollNo : 135,
    "3" : 80, 
    marks : 90,
    "2" : "two"
};

for (var prop in student){
    console.log(prop);
    console.log(prop, student[prop]);
}

var keys = Object.keys(student);
console.log(keys);

var key = Object.getOwnPropertyNames(student);
console.log(key);