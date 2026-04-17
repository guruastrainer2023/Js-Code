let numbers=[45,56,21,58,60]
console.log(numbers)
console.log(numbers.length);
for(let i=0; i< numbers.length; i++){
    console.log(numbers[i])
}

numbers.pop()
console.log(numbers)

numbers.unshift(45,50,51);
console.log(numbers)

numbers.splice(3,2,1,2,3);
console.log(numbers)

numbers.forEach( (i)=>{
    console.log(i)
}  )

let arr=numbers.map((i)=>i*i);
console.log(arr)

let sum=numbers.reduce(  (a,b)=>{
    return a+b;
})
console.log(sum)

let arr1=numbers.filter(  (n)=>n%2!=0 )

console.log(arr1)
