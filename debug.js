console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 2000); 
Promise.resolve().then(() => { console.log("Promise Task");},1000);
console.log("End");