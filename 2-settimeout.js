//started operating system
console.log("first")
// setTimeout is async so it gets offloaded .
setTimeout(() => {
    console.log("second") 
},0)
console.log("third")
//completed and exited operating system