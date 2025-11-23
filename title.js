function processproducts(products)
{
    const productnames=products.map(function (item){
        return item.name;
    });
    console.log(productnames);
    products.forEach(product=> {
        if(product.price>50)
        {
            console.log(product.name + " is above $50")
        }
        else
        {
            console.log(product.name + "is below $50")
        }
    });
}
let items=[
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 }];
processproducts(items)