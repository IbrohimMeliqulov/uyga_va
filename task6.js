function checkingtheletter(str,char){
    obj={}
    for(let i of str){
        if(i in obj){
            obj[i]+=1
        }else{
            obj[i]=1
        }
    }
    let count=0
    for(let key in obj){
        if(char===key){
            count=obj[key]
        }
    }
    return count
}




let str="Salom Dunyo"
let char="o"
console.log(checkingtheletter(str,char))