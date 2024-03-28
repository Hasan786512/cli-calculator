#! /usr/bin/env node
import inquirer from "inquirer";

const answear = await inquirer.prompt([{
name : "firstnumber",
type : "number",
 message : "enter first number",},

{name : "secondnumber",
type :   "number",
 message: "enter second number",},

{name : "operator",
 type :"list",
 message : "enter a number to perform operator",
 choices :["add","multi","sub","div"],
}
])
if(answear.operator === "add"){
console.log(answear.firstnumber + answear.secondnumber)    
}else if(answear.operator === "multi"){
    console.log(answear.firstnumber * answear.secondnumber)    
    }else if(answear.operator === "sub"){
        console.log(answear.firstnumber - answear.secondnumber) 
    }else if(answear.operator === "div"){
        console.log(answear.firstnumber / answear.secondnumber) 
    }else
    console.log("sorry you chooose wrong operator");