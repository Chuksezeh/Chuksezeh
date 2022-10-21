//for loop
//for(let i = 0; i < 5; i++){
   // console.log('in loop:',i );
//}

//FOR LOOP

//const names = ['Okeke', 'Mario', 'Ben'];

//for (let i =0; i < names.length; i++) {
    //console.log(names[i]);
    //let html = `<div>${names[i]}</dive>`;
   // console.log(html);
    
//}
//while loop

//let i = 0;
//while(i < 5){
    //console.log('Loop:',i);
    //i++;
//}

//while(i <names.length){
    //console.log(names[i]);
    //i++;
//}

//DO WHILE LOOP

//do{
    //console.log('this is:', i);
   // i++;
//} while(i < 10);

//IF STATEMENT

//const din = ['chukwuka','paul','ezeh','emeka'];

//if (din.lenghth > 3) {
    //console.log('the name is correct');
    
//}
//let password = 'pas@';

//if (password.length >= 8 ) {
  //  console.log('password is good')
//}else{
 //   console.log('weak password')
//}
//if (password.length >= 12 && password.includes('#')) {
    //console.log('password is mighty strong')
//}else if (password.length >= 8 || password.includes('@')) {
    //console.log('password is strong')
//} else{
    //console.log('password too weak, choose another')
//}
//let user = false;

//if(!user){
  //  console.log('user not found, please register')
//}
//console.log(!true);
//console.log(!false);

//SWITCH STATEMENT

//const score = 'F';

// switch(score){
//     case 'A':
//     console.log('you got an A');
//     break
//     case 'B':
//     console.log('you got an B');
//     break
//     case 'C':
//     console.log('you got an C');
//     case 'D':
//     console.log('you got an D');
//     case 'E':
//     console.log('you got an F');
//     case 'F':
//     console.log('you got an G');
//     case 'G':
//     console.log('you got an H');
//     case 'H':
//     console.log('you got an H');
//     default:
//         console.log('not a score')

// }

//VARIABLES & BLOCK SCOPE

//  const age = 30;
//  if(true){
//     const age =35;
//     const name ='ebuka'
//     console.log('the work inside:',age, name);
//     if(true){
//         const age =50;
//         const name ='emeka'
//         console.log('the work inside:',age, name); 
//  }    
//  }
// console.log('work outside', age)
function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 1; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`new name added ${i}, side ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  