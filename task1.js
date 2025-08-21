function chechpassword(str){
    if(str.length>8){
        let raqam=0
        for(let i=0;i<str.length;i++){
            if(i>="A" || i<="Z"  &&  i>="a" || i<="z"){
                raqam+=1
            }
        }
        return  "Kuchli parol"
    }else{
        return  "Kuchsiz parol:8 ta belgidan iborat emas"
    }
}



let str="fEya123paf6"
console.log(chechpassword(str))