//chaining function
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(this.name +" Just logged in");
        return this
    }
    logOut(){
        console.log(this.name +" Just logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log("score of "+this.name +"  is "+ this.score);
        return this;
    }
}
var userOne = new User("samin","abc@gmail.com");
var userTwo = new User("sam2","abc@gmail.com");

//console.log(userOne);
userOne.login().logOut();