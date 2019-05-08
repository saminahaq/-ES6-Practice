let callbacks = []
for (let i = 0; i <= 6; i++) {
callbacks[i] = function () {
    
    return i * 2 
}
console.log(callbacks[i]());
}
