var rect =  require('./callBack');

function solveRect(l,b) {

    console.log("applied to l = " + l + " b = " + b);

    rect(l,b,(err,response) => {

        if(err){
            console.log("error : " + err.message)
        }
        else {
            console.log("Area of the rectangle is : " + response.area());
            console.log("Peremeter of the rectangle is : " + response.peremeter());
        }
    });

    console.log("this is to chech asnchronity");
}

solveRect(1,2);
solveRect(3,5);
solveRect(-1,5);
solveRect(3,0);
