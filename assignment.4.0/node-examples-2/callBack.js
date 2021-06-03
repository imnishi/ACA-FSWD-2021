module.exports = (x,y,callback) => {

    if(x<=0||y<=0){
        setTimeout (() => callback(new Error("invalid dimensions"),null),
        5000);
    }
    else {
        setTimeout (() => callback(null,
            {
                area : () => (x*y),
                peremeter : () => (2*(x+y))
            }),
        5000);
    }
}