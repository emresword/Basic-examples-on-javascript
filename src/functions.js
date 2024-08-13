function addToCart(productName,quantity) {
    console.log("added to cart"+productName +"quantity"+quantity)
}
addToCart("apple")
addToCart("egg")
let sayHello=()=>{
    console.log("hello world")
}
sayHello()
let sayHello2=function(){
    console.log("hello world 2")
}
sayHello2()
//obje javadaki  referans tip gibi  çalışır heap
let product2={productName:"elma",unitPrice:10,quantity:5}
let product3={productName:"elma",unitPrice:20,quantity:5}
product2=product3
product2.productName="karpuz"
console.log(product3.productName)
//burda javadaki gibi değer tip gibi çalışır stack
let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

// ...products bu üç nokta rest anlamına gelir



