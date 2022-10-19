let user = {
    name: 'chuks',
    age: '30',
    email: 'chuksintellectual@gmail.com',
    location: 'abuja',
    blogs: ['the broken bone, the ant hill of savannah']
};
console.log(user);
console.log(user.name);

console.log(user.age);

console.log(user['location']);
user['name'] = 'peter';

console.log(user['name']);

console.log(typeof user);