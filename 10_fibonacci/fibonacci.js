const fibonacci = function(a) {
    if(a<0){
        return 'OOPS';
    }
    if(a<3){
        return 1;
    }
    let x1 = 1;
    let x2 = 1;
    for(let i=2; i<a; i++){
        let s = x1+x2;
        x1 = x2;
        x2 = s;
    }
    return x2;
};

// Do not edit below this line
module.exports = fibonacci;
