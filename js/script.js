const date =new Date();//creating a date object to get today date 
alert("Welcome to Ghada Protfile The Date is: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//using alert to show a pop up messige contining welcome and the date using 
//date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear() methods

const button1 =document.getElementById("all");
const button2 =document.getElementById("Web_Devalpment");
const button3 =document.getElementById("Hardwarye_Design");
const button4 =document.getElementById("System");
const boxes = document.getElementsByClassName("box");

function filter_projuct(type){
    for (let i = 0; i < boxes.length; i++) {
      const element = boxes[i];
      const boxType = element.getAttribute("data-name");
      if (type === "all" || boxType === type) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
}
}
button1.addEventListener("click", function(){filter_projuct("all")})
button2.addEventListener("click", function(){filter_projuct("Web_Devalpment")})
button3.addEventListener("click", function(){filter_projuct("Hardwarye_Design")})
button4.addEventListener("click", function(){filter_projuct("System")})

