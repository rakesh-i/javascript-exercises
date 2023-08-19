const removeFromArray = function() {

    const a = arguments[0];
    const x = [];
    let count = 0;
    const y = [];
    for(let i=1; i<arguments.length; i++ ){
        y[i-1] = arguments[i];
    }
    let n = a.length;
    let m = y.length;
    for(let i=0; i<n; i++){
        let flag = 0;
        for(let j=0; j<m; j++){
            if(a[i]===y[j]){
                flag=1;
                break;
            }
        }
        if(flag==0){
            x[count++] = a[i];
        }
    }
    return x; 
};

// Do not edit below this line
module.exports = removeFromArray;
