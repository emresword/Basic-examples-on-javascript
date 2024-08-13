function findPrimeNumber(number){
    let counter=0
    for(let i=2;i<number;i++){
        if(number % i==0){
            if(number==2){
                console.log(`${number} is prime number`)
            }
            counter++
        }
    }
    if (counter==0) {
        console.log(`${number} is prime number`)
    } else {
        console.log(`${number} isn't prime number`)
    }

}
findPrimeNumber(111)
console.log("--------------------------")
let numbers=[]
for(let i=0;i<1000;i++){
    numbers.push(i)
}

findPrimeNumbers(numbers)
function findPrimeNumbers(numbers){
    let counter =0;
    for(let a=0;a<numbers.length;a++)
    {let counter =0;
        for(let b=2;b<numbers[a];b++){
            if(numbers[a] % b==0){
                
                counter++
            }

        }
        if (counter == 0 && numbers[a] > 1 || numbers[a] == 2) {
            console.log(`${numbers[a]} is prime number`)
        } else {
            console.log(`${numbers[a]} isn't prime number`)
        }

      
    }
  
}
   
    
    
