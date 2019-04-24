//Functions
//non expression function 
function fun() {
    console.log('greet');
}
fun();

//expression function : end with the semicolon
var expfun = function () {
    console.log('expression function end with the semicolon');
};

expfun();

//with parameter

var fun = (a, b, c) => {
    let res = a + b + c;
    multi = (res) => {
        console.log(res * 6);
   
    };
    multi(res);
};
fun(2, 2, 2);

//more practice
let person = ['sam','mas','khan'];
let son = ['khan','malik','sam'];
var fun = (person, son) => {
    console.log(person + son);
    
}
//fun("sam","samson");
(son).forEach(fun);
//son.forEach(fun);
