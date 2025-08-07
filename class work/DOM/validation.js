// var name="1as";

//with both a-z and anything
// var reg=/[a-z]/;
let reg=document.getElementById("name").value.trim();
//only a-z are valid
let regi=/^[a-z]/;

let regu=document.getElementById("number").value.trim();
// var num="41265265";
// $ is required in only digit
//{10} is required for only 10 numbers
var regiu=/^[0-9]{10}$/;

// console.log(regu.)

function valid(){
  
    if(regi.test(reg) && regiu.test(regu)){
        alert("form submmited successfuly");
    }
 
    else if(!regi.test(reg) && regiu.test(regu)){
       regu.add("");
    }
}
// for both small and capital
// var reg=/[a-zA-Z]/;

// button.addEventlistner."click".function(){
// function valid(){
// if(!str.test(reg.value)){
//     document.getElementById("name").style.color="red";
//     document.getElementById("name").innerText="*invalid input";
// }
// }
// }
