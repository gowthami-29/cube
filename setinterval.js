let id=setInterval(()=>{
    console.log("loading..."),1000});
setTimeout(()=>{
    clearInterval(id);
    console.log("Loaded sucessfully");
},5000)