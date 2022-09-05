const user = {username: 'jaimerdev', age: 24, country: 'EC'};
const {username, ...values} = user;
console.log(username);
console.log(values);