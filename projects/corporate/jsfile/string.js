let name = "sajan"
let occupation ='Lecturer'
let designation ='Lead Developer'

console.log(name.length)
console.log(occupation.length)
console.log(designation.length)
console.log(designation.trim().length)
console.log(occupation.toLocaleLowerCase())
console.log(occupation.toUpperCase())
console.log(designation.concat(occupation).concat(name).toUpperCase)
console.log(name.charAt(2))
console.log(designation.charAt(5))
console.log(designation.includes("lead"))
console.log(designation.toLowerCase().includes('lead'))


// loops

// for loops
// do while
// while


// syntax
for(let i=0; i<=10;i++){
    console.log(i)
}
for(let i=10; i>=0;i--){
    console.log(i)
}



// WAF to calculate multiplication table of 5 5*1 =5

function multiplication(a){
        let root =document.getElementById("root")
        for(i=1;i<=100;i++){
            root.innerHTML+=`<p>${a}*${i}=${a*i}</p>`
        }
    }
        // console.log(`${a} * ${i}=`,a*i)
multiplication(5)

// WAF to find even numbers from 1 to 100
function evennumbers(a){
    
    for(i=1;i<=100;i++){
    if(i%2==0){
        console.log("Even Number",i)
    }
    }
}
evennumbers() 

let text = "Hello World"
console.log(text.length)
console.log(text.length-1)

// let text = "Hello World"
for(let i=0; i<= text.length -1;i++){
    if(i%2==0){
        console.log(text[i].toUpperCase())
    }else{
        console.log(text[i].toLowerCase())
    }
}



// WAF to count the number of space in a sentences

function countSpace(sentence){
    let count =0
    for(let i=0;i<sentence.length-1;i++){
    if(sentence[i] ===" "){
            count = count +1 
        }
}
console.log('Number of space',count)
return count
}


countSpace('lorem ipsum is greater for calculating spaces')

// wAF to count the number of words in a sentences

function countWord(sentence){
let spaceCount =countSpace(sentence)
let wordCount = spaceCount +1
console.log('word Count',wordCount)
}
countWord('lorem ipsum is greater for calculating spaces')



//WAF to count the number of  any given character
function countCharacter(sentence="this is the dummy sentence",character=" "){
    let count =0
    for(let i=0;i<sentence.length-1;i++){
    if(sentence[i] === character){
            count = count +1 
        }
}console.log('count',count)
return count
}
countCharacter('lorem ipsum is greater for calculating spaces.;')
countCharacter('lorem ipsum is greater for calculating spaces.;',"p")
countCharacter('lorem ipsum is greater for calculating spaces.;',"r")


  