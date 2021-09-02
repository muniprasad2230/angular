
var atmPromise = new Promise( function(resolve,reject) {
    cardWorking = true;
    if(cardWorking) {
        resolve("card is working")
    } else {
        reject("failed")
    }
})

atmPromise.then((result) => {
    console.log(result)
    return "card checking is complete"
})
.then((result) => {
    console.log(result)
    return "something"
})
.then( (something) => {
    console.log(something)
})
.catch(() => {
    console.log("ERROR") 
})



