// WAF to find if given number is even or odd

function isEvenOdd(a){
    if(a%2==0){
        console.log('Even',a)
    }else{
        console.log('Odd',a)
    }
}
isEvenOdd(10)
isEvenOdd(11)
isEvenOdd(21)

// WAF to find the largest number among three different number

function largest(a,b,c){
    if(a>b && a>c){
        console.log('largest',a)
    }
     else if(b>a && b>c){
        console.log('largest',b)
    }else{
        console.log('largest',c)
    }    
}
largest(10,12,14)

// WAF to find if given number is divisible by 5 and is even

function largest(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }    
}
const large= largest(101,123,11)
console.log("largest Number",large)


