//Question 39 

//write a function city_country and the three different city pairs then call the function

function city_country(city1:string, city2:string, city3:string){
    return city1;city2;city3;
    return city1;
    return city2;
    return city3;
}
let city0 =city_country("Lahore,Pakistan","Karachi,Pakistan","Peshawar,Pakistan");
console.log(city0);//Lahore,Pakistan

 let city1=city_country(`"${"Lahore,Pakistan"}"`,"","");
 let city2=city_country(`"${"Karachi,Pakistan"}"`,"","");
 let city3 =city_country(`"${"Islamabad,Pakistan"}"`,"",""); 
 console.log(city1,city2,city3);// "Lahore,Pakistan" "Karachi,Pakistan" "Islamabad,Pakistan 
console.log(city1);
console.log(city2);
console.log(city3);

// "Lahore,Pakistan"
// "Karachi,Pakistan"
// "Islamabad,Pakistan"




