//class inheritance 
//chaining function
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(this.name + " Just logged in");
        return this
    }
    logOut() {
        console.log(this.name + " Just logged out");
        return this;
    }
    updateScore() {
        this.score++;
        console.log("score of " + this.name + "  is " + this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != userOne.email;
        })
    }
}
var userOne = new User("samin", "abc@shan.com");
var userTwo = new User("sam2", "abc@gmail.com");
var admin = new Admin("shan", "shan@gmail.com");
var users = [userOne,userTwo,admin];
console.log(users);
userOne.login().logOut();

admin.deleteUser(userOne);
console.log(users);