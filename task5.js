function hour_minute(minutes){
    let hour=0
    let minute=0
    if(minutes<0){
        return "Noto'gri ma'lumot: Daqiqa manfiy bo'lmasligi kerak"
    }else{
        hour=parseInt(minutes/60)
        minute=minutes%60
    }
    return `${hour} soat ${minute} daqiqa`
}



let minutes=135
console.log(hour_minute(minutes))