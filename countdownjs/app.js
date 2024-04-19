const endD = "25 March 2024 9:49 am";
document.getElementById("endDate").innerText = endD;
 const input=document.querySelectorAll("input");

function clock(){
    const date = new Date(endD);
    const now = new Date();
    console.log(date , now);
    const diff=(date -now) /1000;
    if(diff<0)return;


   //conver into days
    input[0].value=Math.floor(diff/3600/24);
    input[1].value=Math.floor(diff/3600)%24;//hours
    input[2].value=Math.floor(diff/60)%60;//min
    input[3].value=Math.floor(diff)%60;//sec
}
clock();

setInterval(()=>{
    clock();
},1000);