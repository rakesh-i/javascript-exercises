const reverseString = function(string) {
    let n = string.length;
    let a = "";
    for(let i=n-1; i>=0; i--){
        a += string[i];
    }
    return a;
};

// Do not edit below this line
module.exports = reverseString;
