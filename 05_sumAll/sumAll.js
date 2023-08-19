const sumAll = function(a, b) {
    if(typeof a != 'number'||typeof b!= "number"){
        return 'ERROR';
    }
    let l = (a>b)?a:b;
    let s = (a>b)?b:a;
    let sub = 0;
    if(s<0){
        // s = Math.abs(s);
        // sub = s*(s+1)/2;
        return 'ERROR';
    }
    let sum = l*(l+1)/2;
    return sum-sub;
};

// Do not edit below this line
module.exports = sumAll;
