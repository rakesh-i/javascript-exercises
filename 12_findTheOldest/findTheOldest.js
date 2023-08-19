const findTheOldest = function(people) {
    let x = 0;
    let age = 0;
    let n = people.length;
    for(let i=0; i<n; i++){
        const curr = getage(people[i].yearOfBirth, people[i].yearOfDeath);
        if(age<curr){
            age = curr;
            x= i;
        }
    }
    return people[x];
};

const getage = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
