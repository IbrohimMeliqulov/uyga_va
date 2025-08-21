function replace_numbers(str){
    let n=''
    for(let i of str){
        if(i>=0 || i<=9){
           n+="*" 
        }else{
            n+=i
        }
    }
    return n
}




let str="2023-yil"
console.log(replace_numbers(str))