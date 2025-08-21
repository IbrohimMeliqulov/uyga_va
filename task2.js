function sum_of_things(weight,price){
    let sum=weight*price
    if(sum>100000){
        return sum*0.9
    }
}

function getting_info(callback){
    let price=Number(prompt("Narxini kirgizing: "))
    let weight=Number(prompt("Miqdor kiriting: "))
    
    callback(price,weight)
}


getting_info(sum_of_things)

