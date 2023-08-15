//Functions
/*function nameproperty() {
    
    console.log("Karachi hai jaani");
}
//nameproperty ()

function message() {
    console.log("Karachi ao kabhi")
}
message()
//simple function use
function mylove() {
    console.log("aaj ka mosam zabardast hai")
}
mylove()

function myshadi() {
    console.log("main kabhi bhi shadi nahi karunga")
}
myshadi()

function mujhypyar() {
    console.log(true)
}
mujhypyar()*/
/*function c(a:number, b:number) {
    let c = a + b;
    console.log(`The sum of ${a} and ${b} is = ${c}`)
}
c(2,3);
//The sum of 2 and 3 is 5/*

function n(q:number, w:number) {
    let r = q - w;
console.log(`The sum of ${q} and ${w} is = ${r}`)
}
n(10,7)
//The sum of 10 and 7 is = 3
function x(c:number, v:number) {
   let n =(c + v);
    console.log(`The sum of ${c} and ${v} is ${n}`)
}
x(2,3)

function h(x:number,b:number) {
    let d = x*b;
    //console.log(`${x} multiply by ${b}, answer will be = ${d}`)
    console.log(d)//we can use this method for shorthand
}
h(8,5)

function j(l:string, k:string) {
    let r=l ;let n= k;
    console.log(`My favrt food is ${l} ${k}`)
}
j("Aalu","Biryani")

function true1(m:boolean, z:boolean) {
      let f = m ;let g= z;
      console.log(`Are you shadi shuda. ${m}/${z}`)
}
true1(true,false)

function wrong(d:boolean) {
    let correct = d;
    console.log(`I want to marry with you.${d}`)
}
wrong(true)*/
/*function w(t:number, y:number) {
    let u = t * y;
    console.log(u)// we can use this method for shorthand
}
w(2,3)
//The sum of 2 and 3 is = 6

function o(l:number, p:number) {
    let h = l / p;
    console.log(h)
}
o(50,5)
//The sum of 50 and 5 is 10
function nameproperty(x:string, y:string) {
    let print = x+y;
    console.log(print)//ans will be Farhan19
    //console.log(`My name is ${x} and my age is ${y}`)
}
nameproperty("Farhan","19")//like that we can solve all assignment and logical operators.
//My name is Farhan and my age is 19
function myName(nalo1:string) {
    let myName = nalo1;
    console.log(`Munjo nalo ${myName} aahy.`);
}
myName("Farhan Zafar Aziz Rajar");*/
//Munjo nalo Farhan Zafar Aziz Rajar aahy.
/*function n(a:boolean) {
    var b = a;
    console.log(`You are married.${b}`);
}
n(false)
//You are married.(false)

function x(q:string) {
    let y = q;
    console.log(`You are married.${q}`)
}
x("yes")*/
//You are married.yes
//parameter type Annotation
/*function funcName(name:string, Name:string) {
    console.log(name.toUpperCase(),Name.toLowerCase());
}
funcName("farhan","AZIZ")
//FARHAN aziz
function again(Aalu:string) {
    console.log(Aalu.toUpperCase())
}
again('aalu biryani')*/ //AALU BIRYANI
//Arrow function
// arrow function always declare with variable
//and called with variable name
/*let arrowfunc=()=>{
    console.log("Biryani")
}
arrowfunc()
//Ans will be Biryani
let newFunc=()=>{
    console.log("Shami Kababs")
}
newFunc()
//Shami Kababs
let n=(a:number,b:number)=>{
    console.log(a+b);
}
n(2,3)//ans is 5

let q =(s:number,r:number)=>s * r;
 let a =q(3,4)
  console.log(a)
//Ans will be 12

let w =(e:number,f:number)=>e/f;
let s =w(25,5);
console.log(s), */ //Answer is 5
//first arrow function
/*let sum1 = (a:string, b:string) => {
    //block of code accessable
    return a + b;//Mutter 20
    //not accesable code
}
//return arrow function always with a variable like below example
 let c = sum1("Mutter","20kg");
 console.log(`beta ${c} ly aa niaz k liye.`)
//Ans will be Mutter20

let var1 = (nar:string, mar:string) => nar + mar;
let var2 = var1("Umerkot","City");
console.log(`${"Umerkot"} is a famous ${"City"} by there Desert`)*/
//Umerkot is a famous City by its Desert
//2nd arrow function
/*let sum2 = (a:number, b:number) => a+b;//can skip return
let a = sum2(3,7);//returns 10
console.log(a)*/
//Multiplication in function
/*let num =(n1:number, n2:number) => n1 * n2;
let num1 = num(3,4);
console.log(num1)*/
//Division in function
/*let sum_ = (n2:number, n0:number):number => {
   return n2 / n0;
}
   let n = sum_(50,5);
   console.log(n)*/
var funcproperty = function (str) { return (str.toUpperCase()); };
var a = funcproperty("pakistan zindabad");
console.log(a);
var name1 = function (nalo1) { return (nalo1.toUpperCase()); };
var name2 = name1("farhan ALI");
console.log(name2);
function myName(a, b) {
    console.log(a.toUpperCase(), b.toLowerCase());
}
myName("farhan", "AZIZ");
// if, else, else if statements
/*let per = 40;
if (per>=40){
console.log("pass")
}
else {
    console.log("fail")
}*/ //Ans is Pass bcz variable value is equal.
//else if example//
//promt and alert function always run in browser with the help of html file.
//we can not run javascript in terminal bcz it can not supports.
//example
