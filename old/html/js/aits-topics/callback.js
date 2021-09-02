// function siginPage(){
//     console.log("Sign in input")
// }

// function checkUser(){
//     setTimeout(() => {
//         console.log("check user details")
//     },5000)
// }

// function welcome(){
//     console.log("welcome page")
// }

// siginPage()
// checkUser()
// welcome()


// Callbacks



function siginPage(){
    console.log("Sign in input")
}

function checkUser(callback){
    setTimeout(() => {
        console.log("check user details")
        callback()
    },5000)
}

function welcome(){
    console.log("welcome page")
}

siginPage()
checkUser(welcome)

// CALLBACK HELL

// 1) card Verify
// 2) pass Verify
// 3) amount Verify
// 4) check availability
// 5) final touches

cardVerify(() => {
    passVerify(() => {
        amountVerify(() => {
                checkAvailability( () => {
                    finalTouches(
                        //some shit
                    )
                }
                )
            }
        )
    })
})