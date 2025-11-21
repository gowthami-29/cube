let profile={
    name:"Charlie",
    age:99,
    adress:{
        city:"San Francisco",
        zipcode:"94101"
    }
};
let updates={
    age:900,
    adress:{
        zipcode:"94109",
        country:"USA"
    }
};
const result={
    ...profile,...updates,...profile.age,
    ...updates.age,adress:{
        ...updates.adress,
        ...profile.adress
        
        
    }
}
console.log(result)