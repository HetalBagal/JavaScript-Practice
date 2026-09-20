let random = Math.random()
let a=prompt("Enter First Number")
let c=prompt("Enter operator")
let b=prompt("Enter Second Number")

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",

}
console.log(random)
if (random > 0.1){
    console.log(`The result is  ${a} ${c} ${b}}`)
    alert(`The result is ${eval(` ${a} ${c} ${b}`)}`)
}

else{
    c=obj[c]
    alert(` The result is ${ eval(` ${a} ${c} ${b}`)}`)
}

