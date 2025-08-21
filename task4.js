function name_surname(str){
    let word=str.split(' ')
    let name=word[0]
    let surname=word[1]
    return `${name[0]}.${surname}`
}



str="Ahmad Rahimov"
console.log(name_surname(str))