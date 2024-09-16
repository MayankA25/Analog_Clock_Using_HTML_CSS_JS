let hour_hand = document.getElementsByClassName("hour")[0]
let minute_hand = document.getElementsByClassName("minutes")[0]
let second_hand = document.getElementsByClassName("seconds")[0]

// let date = new Date()



// seconds = date.getSeconds()
// console.log(second)
setInterval(()=>{
    let new_Date = new Date
    current_seconds = new_Date.getSeconds()
    second_hand.style.transformOrigin = `0px 0px`
    second_hand.style.transform = `rotate(${(6*current_seconds)-90}deg)`
    let current_minutes = new_Date.getMinutes()
    // console.log(current_minutes)
    minute_hand.style.transformOrigin = `0px 0px`
    minute_hand.style.transform = `rotate(${(current_minutes*6)-90}deg)`
    let current_hour = new_Date.getHours()
    hour_hand.style.transformOrigin = `0px 0px`
    hour_hand.style.transform = `rotate(${(30*current_hour)+(current_minutes/2)-90}deg)`
    
}, 1000)



