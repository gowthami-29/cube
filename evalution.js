let employees=[
{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
]
let ans=employees.filter(
    (emp)=>emp.tasksCompleted>5
);
let performancelist=ans.map(emp=>{
    let performance="";
    if(emp.rating>=4.5)
    {
        performance="excellent"
    }else if(emp.rating>3.5){
        performance="good"
    }
    else{
        performance="needs improvement"
    }
    return {name:emp.name, performance}
})
let priority={"excellent":1,"good":2,"needsimprovement":3};
performancelist.sort((a,b)=>
priority[a.performance]-priority[b.performance])
console.log(performancelist)