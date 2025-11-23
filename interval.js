let time=10;
time=Number(time);
let intervalid= setInterval(()=>{
    console.log(time);
    time--;
    if(time<0)
    {
        clearInterval(intervalid)
        console.log("countdown completed!")
    }
},1000)