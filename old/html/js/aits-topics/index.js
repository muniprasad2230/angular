// function withoPWithoR() {
//     console.log("NO PARAMETER NO RETURN")
// }

// function withPWithoR(param) {
//     console.log(param)
// }

// function withoPWithR() {
//     return "NO PARAMETER WITH RETURN"
// }

// function withPWithR(param) {
//     return "WITH PARAMETER WITH RETURN"
// }

// withoPWithoR()
// withPWithoR("WITH PARAMETER NO RETURN")
// console.log(withoPWithR())
// console.log(withPWithR())

// function add(a,b) {
//     return( a + b)
// }

// console.log(add(5 , 8))


// var sum = (a,b) => {return a+b}

// console.log(sum(2,3))



// var capitalName = (name) => { return name.toUpperCase() }

// console.log(capitalName("dileep"))




// console.log(student.hasBacklogs)

// student.hasBacklogs = false

// console.log(student.hasBacklogs)

// Object.freeze(student)


// student.backlogCount = 10

// console.log(student.backlogCount)


var names = [
    {
    name : "muni",
    roll : "501",
    float : 99.9,
    phone : 9876543210,
    address : "sdfhjkhlsjdkfkj"
},
{
    name : "muni1",
    roll : "501",
    float : 99.9,
    phone : 9876543210,
    address : "sdfhjkhlsjdkfkj"
},{
    name : "muni2",
    roll : "501",
    float : 99.9,
    phone : 9876543210,
    address : "sdfhjkhlsjdkfkj"
},
{
    name : "muni3",
    roll : "501",
    float : 99.9,
    phone : 9876543210,
    address : "sdfhjkhlsjdkfkj"
}]

names.forEach(n => {
     console.log(n)
})

for( n in names[0]) {
    console.log(n)
}

for (n of names[0]) {
    console.log(n)
}



