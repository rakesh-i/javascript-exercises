const palindromes = function (s) {
    let x = s.toUpperCase();
    let y = "";
    for(let i=0; i<x.length; i++){
        if(x.charCodeAt(i)<91&&x.charCodeAt(i)>64||x.charCodeAt(i)<58&&x.charCodeAt(i)>47){
            y +=x[i];
        }
    }
    //return y;
    let z = "";
    for(let i=y.length-1; i>=0; i--){
        z+=y[i];
    }
    if(z==y){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
