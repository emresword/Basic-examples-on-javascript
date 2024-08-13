class Costumer{
    
    constructor(id,costumerNumber){
//prototyping
        this.id=id

        this.costumerNumber=costumerNumber
    }
} 

let costumer =new Costumer(1,"1234")
console.log(costumer)
// it is undifided
//prototyping
costumer.name="emre sword"
console.log(costumer.name)

class IndividualCostumer extends Costumer{
    constructor(firstName,id,costumerNumber){
        super(id,costumerNumber)
    this.firstName=firstName

    } 
}