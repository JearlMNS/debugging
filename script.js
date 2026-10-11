let count = 0;
let countBtn= document.getElementById("countBtn");
let output= document.getElementById("output");
let resetBtn= document.getElementById("resetBtn");

countBtn.addEventListener("click", function(){
    count = count + 1;
    output.textContent = count;
    console.log(count);
});
resetBtn.addEventListener("click", function (){
    count =0;
    output.textContent =count;
});

