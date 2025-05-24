//find a factorial using javascript reduce loops and functions by any two methods





//Method-1
    let a=6
   function factorial(number){
    let arr= Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
   }
   factorial(a)

//Method-2

   let b=[1,2,3,4,5,6];
   const newArr=((a,b)=>{
    return a*b
   })
   console.log(b.reduce(newArr))