//FUNCTION DECLEARATION
// men();
// men();
// men();
// function men(){
//     console.log('Helleo World');
// }

//FUNCTION EXPRESSION..........................................................................................................................
// const speak = function(name ='ebuka', time='morning'){
// console.log('good ${time} ${name}');
// };
// speak();
// const calcArea =function(radius) {
//     return 3.22 * radius**2;
    
// }
// const area = calcArea(5);
// console.log(area);

//CALL BACK FUNCTION
// let people = ['ebuka','mario', 'nonso', 'ifeanyi', 'obi'];

// people.forEach(function(person, index){
//     console.log(index, person);
// }
// );

// const ul = document.queryCommandValue('.people');

// const people = ['mario','emeka', 'ify', 'cosmas', 'nana'];

// let html = ``;

// people.forEach(function(person){
//     html +=`<div class="people">
            
//     <li>men</li>
//     <li>phone</li>
//     <li>sin</li>k
//     <li>woman</li>
    

// </div>`;
// });
// console.log(html);
// ul.innerhtml = html;
// for (let men = 1; men < 6; men++) {
    
//     console.log(men)
//}
// let men = 1;
// while (men < 10) {
//     console.log('continue', men);
//      men++;
//}

// const info = ['emeka', 'uzo','chike','buzo','ify'];
// let i = 0;
// while(i < info.length){
//     console.log(info[i]);
//     i++;
// }
//console.log(this)

// OBJECT LITERAL NOTATION......................................................................................
// let user ={
//     name: 'chukkls',
//     age: 30,
//     email: 'chuksintellectual@gmaiil.com',
//     location: 'kubwa',
//     books: [{tittle: 'broken pieces', likes: 50},
//     {tittle: 'broken pieces', likes: 20}, 
//      {tittle: 'my faith is God', likes: 30}],
//    login(){
//     console.log('the user logged in');
//    },
//    logout() {
//     console.log('the user logged out');
//    },
//    logBooks(){
//     console.log('this user has written the following books:');
//     this.books.forEach(books => {
//         console.log(books.tittle, books.likes);
//     })
//    }
   
// };
// user.logBooks();


//THE  MATHS OBJECT

// const random = Math.random();

// console.log(random);

// THE DOCUMENT OBJECT MODEL...........................................................................................................................................................


// const first = document.querySelector('.jack');

// first.innerHTML += 'PRODUCE MODEL'
// const hello = document.querySelector('.jack');

// const peoples = ['ifeoma', 'Table', 'simon', 'ben', 'ken'];

// const myName ='Paul';

// peoples.forEach(person => {
//     hello.innerHTML +=`<p>${person} ${myName}</p>`;
// });
// console.log(hello)
// const home = document.querySelector('a');

// home.setAttribute('href', 'www.yonameabia.com');

// home.innerText = 'The other website to visit';

const test = document.querySelector('.jack');
console.log(test);

test.style.color ='blue';
test.style.margin = '50px';
test.style.fontSize = '80px';


const bulb = document.querySelectorAll('p');
bulb.forEach(p => {
    if (p.textContent.includes('hire')) {
        p.classList.add('hire');
    }
    if(p.textContent.includes('create')){
        p.classList.add('create')
    };
});


const items  = document.querySelectorAll('li');

items.forEach(items => {
    items.addEventListener('click', (e) =>{
        // console.log(items);
        // console.log(e.target);
        e.target.remove();
    });
});
const ul = document.querySelector('ul');

const button = document.querySelector('button')

button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'add more';
    ul.append(li);

});
