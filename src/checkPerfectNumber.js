let numbers=[];

for(let i=0;i<1000;i++){
   numbers.push(i)
}

checkPerfect(...numbers)

function checkPerfect(...numbers ){
    for(let a=0;a<numbers.length;a++){
        let perfectTotal=0

        for(let b=1;b<numbers[a];b++){
            if(numbers[a]%b==0){
                perfectTotal +=b
            }
        }
        if(perfectTotal==numbers[a]){
            console.log(`${numbers[a] } is perfect number`)

            
        }else{
            console.log(`${numbers[a] } isn't perfect number`)
        }
        
    }
}