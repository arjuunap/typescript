interface Product {
    id : number,
    name : string,
    price : number
}


class ProductManager{
    private products : Product [] = [];

    addProduct(product:Product):void{
        this.products.push(product)
    }

    getProductDetails(): Product[]{
        return this.products

    }

    deleteProduct(id:number):void{
        this.products = this.products.filter((p) => p.id !== id)
    }
    getTotal():number{
        return this.products.reduce((total,p) => total + p.price,0)
    }

}

const p1 = new ProductManager()
const p2 = new ProductManager()

p2.addProduct({
    'id' :1, "name" : "samsung","price" : 40000
})



p2.addProduct({
    'id' : 2, "name" : "apple","price" : 60000
})

p2.addProduct({
    'id' : 3, "name" : "oppo","price" : 20000
})


p1.addProduct({
    'id' : 1, "name" : "tv","price" : 50000
})

p1.addProduct({
    'id' : 2, "name" : "washingmachine","price" : 30000
})

console.log(p2.getProductDetails())



p2.deleteProduct(2);

console.log(p2.getProductDetails())


console.log(p1.getProductDetails())




