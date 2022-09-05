function newUser(name, age, country) {
    var name = name || 'Jaime';
    var age = age || 24;
    var country = country || 'EC';
    console.log(name, age, country);
}

newUser();
newUser('Lenin', 25, 'USA');

function newAdmin(name = 'Jaime', age = 24, country = 'EC') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Lenin', 25, 'USA');