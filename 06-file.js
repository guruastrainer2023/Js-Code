let arr=[40,50, "Welcome", "Chennai", true, false, (i)=>i*i]
console.log(arr)

for(let i=0; i<arr.length; i++){
    if(typeof arr[i]=="function")
        console.log(arr[i](10));
    else
        console.log(arr[i])
}