console.log("Merhaba Kodlama.io")
//var hem sayı degerı hemde string degerlerı 
//atayabıldıgımzden kaynaklı let kullanmalıyız
//let duplicate izin vermez
//let sayi1=10
//let sayi="emre"
//calışmaz


//JS type safe değildir
//let sayı1=10
//sayı1="emre"
//calısır cunku js type safe degıl
let student= {id:1,name:"emre"}
console.log(student)
function save(ogrenci) {
    console.log(ogrenci)
}
save(student)


let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

let points=[1,2,3,34,23]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","K",..."EF")
//destructing
let populations=[10000,20000,30000]
let[small,medium,high]=populations
console.log(small)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)