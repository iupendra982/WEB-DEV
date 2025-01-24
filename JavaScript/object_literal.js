const item={price:1000.0,discount:25,colors:["red","blue","green"]};
console.log(item);
//two different ways of accessing value by using key
console.log(item["price"]);
console.log(item.price);
console.log(item.colors);
console.log(item.colors[1]);

student={name:"upendra",age:22,marks:95.5,city:"delhi"};
console.log(student);
//accessing value by using key
console.log(student["age"]);
console.log(student.age);
student.city="kanpur";//updating key value
console.log(student.city);
console.log(student);
student.gender="male";//adding new key value
console.log(student.gender);
console.log(student);
delete student.marks;//deletion
console.log(student);

//multiple objects
const classInfo={
    aman:{grade:"A",city:"delhi"},
    upendra:{grade:"B",city:"kanpur"},
    karan:{grade:"c",city:"mumbai"}
}
console.log(classInfo);
console.log(classInfo.upendra.city);

console.log("Random number generation between 1 to 10");
for(let i=1;i<=10;i++){
    console.log(Math.floor(Math.random()*10)+1);
}