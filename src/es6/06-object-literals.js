//Enhaced object literals 

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('jaimerdev', 24, 'EC', 1));