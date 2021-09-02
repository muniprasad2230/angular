function student(aname,age,aclass,section)  {
    this.name = aname ,
    this.age = age,
    this.class  = aclass,
    this.section = section
}


student.prototype.percentage = 99.9;
var obj1 = new student("dummy",23, "10th","a")

// console.log(obj1.percentage)


// document.getElementById("name1").addEventListener("click",name1);

// function name1(){
//     // document.body.style.background = "red"
//     document.getElementById("para").innerHTML = "klnfdlkgnsdfglkjnfslk"
// }

function findArea(oneSide) {
    console.log(oneSide*oneSide);
}

function findArea(oneSide, twoSide) {
    console.log(oneSide+twoSide*(oneSide-2*(oneSide/twoSide)));
}

function findArea(oneSide, twoSide, threeSide) {
    console.log(oneSide*twoSide*threeSide)
}

function dummy (){
    console.log(2)
}

