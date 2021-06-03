var rect = require('./formula');

function solveRect(l,b) {
    console.log("applied to l = " + l + " and b = " + b);

    if(l<=0||b<=0){
        console.log("invalid dimensions");
    }
    else{
        console.log("area = " + rect.area(l,b));
        console.log("peremeter = " + rect.peremeter(l,b));
    }
}

solveRect(1,2);
solveRect(3,5);
solveRect(-1,5)
solveRect(3,0);