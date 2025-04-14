let x =45
let person = {
    firstname: "Aman",
    lastname: "Prajapti"
}

function sum(a,b){
    return a+b
}
// module.exports.x=x
// module.exports.person=person
// exports.sum = sum

//Second method
module.exports={x,person,sum}

//third method
// module.exports = sum