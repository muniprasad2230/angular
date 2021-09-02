async function someNfunctions() {

     var atmPromise = new Promise( (resolve,reject) => {
        setTimeout(
            () => {
                resolve("Success")
            }, 5000
        )
     })

     var res = await atmPromise

     console.log(res)
     console.log("after success")

}

someNfunctions()