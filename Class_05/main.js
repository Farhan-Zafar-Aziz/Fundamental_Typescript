//If statement Nested
//in nested condition we use if condition within if condition 
var weddingOf = "Farhan Aziz";
var date = 24;
// if condition is true then ans will be print the if value
//if condition is false then ans will be print thr else value
if (weddingOf === "Farhan Aziz") {
    if (date >= 24) {
        console.log("Here is your ticket");
    }
    else {
        console.log("You are not eligible");
    }
}
//Example 2
//let weddingOf = "Farhan Aziz";
//let date = 24;
//if(weddingOf === "Farhan Aziz") {
//console.lo
// Arrays 
//We use for store multiple values in one 
// start from always 0 index 
//Arry contain multiple type values 
//let fruits = ["banana","grapes","orange","apple"];
//console.log(fruits[3]);//apple
//Arrays: adding and removing elements
//adding element in an array using index 
/*let pets:string[] = [];

pets[0] = "cat" ;
pets[1] = "dog";
console.log(pets[0]);
console.log(pets[1]);*/
//pop() method used for removing element from last of an array
/*let pets = ["cat","dog","cow","bull","horse"];

pets.pop();//remove horse
pets.pop();//remove bull
pets.pop();//remove cow

console.log(pets);*/
//push method to use for add element in last of an array 
/*let pets = ["cat","dog","cow","bull","horse"];

pets.push("rat");//["cat","dog","cow","bull","horse","rat"];

console.log(pets);*/
//shit() method use to remove an element from start of an arry
/*let pets = ["cat","dog","cow","bull","horse"];

pets.shift();// remove cat
pets.shift();//remove dog
pets.shift();//remove cow

console.log(pets);*/
//unshift() method to use adding element in the starting point of an array
/*let pets = ["cat","dog","cow","bull","horse"];

pets.unshift("rat");//["rat",cat","dog","cow","bull","horse"];
console.log(pets);*/
//splice() method use for adding an element in an array in start/middle/end
/*let pets = ["cat","dog","cow","bull","horse"]

pets.splice(2,0, "rat");//[ 'cat', 'dog', 'rat', 'cow', 'bull', 'horse' ]
pets.splice(2,1,"rabbit")//[ 'cat', 'dog', 'rabbit', 'bull', 'horse' ]
console.log(pets);*/
//slice() methode use to remove an element from an array in start/middle/end
/*let pets = ["cat","dog","cow","bull","horse"];

let sliceArray = pets.slice(1);//["dog","cow","bull","horse"]
console.log(sliceArray);//["dog","cow","bull","horse"]

let SliceStart = pets.slice(1,3);//['dog','cow']
console.log(SliceStart);*/
//These are 6 functions or method (associated with array)
//pop()removing in last
//push()adding in start
//shift()removing in start
//unshift()adding in last
//splice()adding in start/middle/end specific point
//slice()removing in start/middle/end specific point
//These are methods we use through an array 
