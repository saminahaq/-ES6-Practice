class User{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    login(){
        console.log(this.name +" Just logged in");

    }
    logOut(){
        console.log(this.name +" Just logged out");
  
    }
  
}
var userOne = new User("samin","abc@gmail.com");
var userTwo = new User("sam2","abc@gmail.com");

console.log(userOne);
userOne.login();