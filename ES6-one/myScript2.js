function* gen(){
    yield console.log("one");
    yield console.log("Two");

}

var mygen  = gen();
mygen.next();
mygen.next();