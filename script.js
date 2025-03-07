
const box=document.querySelectorAll(".box");
console.log(box);
const body=document.querySelector("body");
const heading=document.querySelectorAll("h2");
// console.log(heading);
body.style.Color="black";

box.forEach((ele) =>{
    ele.addEventListener("click",(e)=>{
        if(e.target.id=="green"){
            body.style.backgroundColor=e.target.id;

            heading.forEach((h)=>{
                h.style.color="white";
            })
        }
        else if(e.target.id=="orange"){
            body.style.backgroundColor=e.target.id;
            heading.forEach((h)=>{
                h.style.color="white";
            })
        }
        else if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id;
            heading.forEach((h)=>{
                h.style.color="white";
            })
        }
        else {
            body.style.backgroundColor="grey";
            heading.forEach((h)=>{
                h.style.color="white";
            })
        }
    })
})