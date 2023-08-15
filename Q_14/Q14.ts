// Question 14

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//Guest list

let friends = ["Sadiq","Jabir","Hamzah"];
console.log(friends[0]);//Sadiq
console.log(friends[1]); //Jabir
console.log(friends[2]); //Hamzah

//Invitition list

let invited = ["Sadiq","Jabir","Hamzah"];

for(let invite = 0; invite < invited.length; invite++){
    let cards = invited[invite];
    console.log(cards,"You are invited at my Valima Ceremony.")
}
// Sadiq You are invited at my Valima Ceremony.
// Jabir You are invited at my Valima Ceremony.
// Hamzah You are invited at my Valima Ceremony.


