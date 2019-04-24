//objects
var user = {
    name : 'crystal',
    age : 30,
    location : 'california',
    login : function(){
        console.log('user login');
    },
    logout: function(){
        console.log('user logout');
    },
    userLog: function(){
        console.log(age);
    }
}
console.log(user.age);
user.userLog();