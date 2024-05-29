let name ='sajan'
let occupation ='lecturer'
let designation ='Lead Developer'

console.log(name.length)
console.log(name.charAt(2))
console.log(designation.charAt(6))
console.log(designation.trim().length)
console.log(occupation.toUpperCase().concat(name.toUpperCase()))
console.log(designation.toLowerCase().includes('lead'))
console.log(occupation.toLocaleUpperCase())
console.log(designation.toLocaleLowerCase().charAt().includes('L'))



// WAF to calculate multiplication table of 5 5*1 =5

function multiplication(a){
    let root =document.getElementById("root")
    for(i=1;i<=100;i++){
        root.innerHTML+=`<p>${a}*${i}=${a*i}</p>`
    }
}
multiplication(5)


function division(a){
    let root =document.getElementById("root")
    for(i=1;i<=10;i++){
        root.innerHTML+=`<p>${a}/${i}=${a/i}</p>`
    }
}
division(5)

function multiplication(a){
    let root =document.getElementById("root")
    for(i=10;i>=0;i--){
        root.innerHTML+=`<p>${a}-${i}=${a-i}</p>`
    }
}

let text = "Hello World"
console.log(text.length)
console.log(text.length-1)

function countSpace(sentence){
    let count = 0
    for(let i=0;i<sentences.length-1;i++){
        if(sentence[i] ===" "){
            count =count +1
        }
        }
        console.log('Number of space,count')
        return count
}



