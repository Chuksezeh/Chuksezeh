// const users = [
//     {name: 'ify', qualified: true},
//     {name: 'tochi', qualified: false},
//     {name: 'king', qualified: false},
//     {name: 'emeka', qualified: true},
//     {name: 'chibike', qualified: false},
//     {name: 'ugochi', qualified: true},
//     {name: 'nameka', qualified: true},
//     {name: 'udochi', qualified: false},
//     {name: 'zion', qualified: true},
//     {name: 'hannah', qualified: false},
//     {name: 'jack', qualified: true},
//     {name: 'fada', qualified: false},
//     {name: 'kacafa', qualified: true},
//     {name: 'umar', qualified: false},
//     {name: 'samole', qualified: true},
// ];
// const qualified = users.filter(users =>{
//     return !users.qualified
// }); 

// console.log(qualified);

// THE MAP METHOD Array>>>.........products..........................................products.......................................products.............................

// const products = [
//     {name: 'phones', price: 20},
//     {name: 'pan', price: 40},
//     {name: 'bowl', price: 46},
//     {name: 'pot', price: 20},
//     {name: 'fan', price: 80},
//     {name: 'tray', price: 20},
// ];

// const saleProduct = products.map((product) =>{
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     }else {
//         return product;
//     }
// });
// console.log(saleProduct);


// THE REDUCE METHOD ........................AbortController.................................AbortController.................................

// const scores = [
//     {player: 'eken', score: 50},
//     {player: 'chuka', score: 534},
//     {player: 'chuka', score: 207},
//     {player: 'ebuka', score: 50},
//     {player: 'ebuka', score: 50},
//     {player: 'chuka', score: 50},
//     {player: 'ebuka', score: 50},
//     {player: 'chuka', score: 39},
//     {player: 'uka', score: 50},
//     {player: 'ekene', score: 50},
//     {player: 'chuka', score: 72},
//     {player: 'ebuka', score: 50},
// ];

// const chukScore = scores.reduce((acom, curent) =>{
//     if (curent.player === 'chuka') {
//       acom += curent.score;  
//     }
//     return acom;
// },0);
// console.log(chukScore);

// THE FIND METHOD............................................................................................................................

// const numbers = [ 60,50,40,30,78,95,78,45.85,12,13,34];

// const callNum = numbers.find((score) =>{ 
//     return score < 50;

// });
// console.log(callNum);

//SORTING STRING AND NUMBERS........................................................................................................
const names = ['uche', 'emy', 'okeke', 'udom', 'ikechukwu', 'zion'];
names.sort();
//names.reverse();


console.log(names);

const number = [20, 12,5,9,18,30,50,56,29,30,45,87,45];
number.sort();
number.sort((a,b) => a - b);

console.log(number);

const players = [
    {name: 'mike', mark: 49},
    {name: 'king', mark: 89},
    {name: 'kiade', mark: 40},
    {name: 'giome', mark: 90},
    {name: 'hele', mark: 30},
    {name: 'yuoj', mark: 55},
    {name: 'genea', mark: 49},
    {name: 'chidi', mark: 30},
    {name: 'umana', mark: 38},
    {name: 'takio', mark: 17},

];
players.sort((a,b) =>{
    if (a.score > b.score) {
        return -1;
    }else if (b.score > a.score) {
        return 1;
    }else{
 return 0;
    }
});

console.log(players);