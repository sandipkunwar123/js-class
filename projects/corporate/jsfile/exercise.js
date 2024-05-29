//Check if a day is weekend day or a working day. Your script will take day as an input.

let day ="sunday"

if(day=="sunday" || day=="saturday"){
}
else{
    console.log("Workday")
}

 
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = "january"
switch(month){
    case "september":
    case "november":
    case "october":
      console.log("the season is autum")
      break;
    case "december":
    case"january":
    case"february":
    console.log('the season is winter')
    break;
    case "march":
    case "april":
     case "may":
    console.log('the season is spring')
    break;
    default:
        console.log('the season is summer')

}
 
// Write a code which can give grades to students according to theirs scores:
// 80-100, A //marks >80 && marks <100
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let mark =50
if (mark > 80 && mark <=100){
    console.log("A")
}else if (mark > 70 && mark < 79){
    console.log("B")
}else if(mark >=60 && mark <=69){
    console.log("c")
}else if(mark >=50 && mark <=59){
    console.log("D")
}else{
    console.log("F")
}
 
//  If user is 18 or older ,
// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to
//  wait for the number of years he needs to turn 18.

let age =1
if (age >=18){
    console.log('you are old enough to drive')
}else{
    let ageGap =18 - age
    console.log('woit for ${ageGap} to drive')
}
 
// extra 3

