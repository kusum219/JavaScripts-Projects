let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
  list.addEventListener("dragstart",(e)=>{
    let selected = e.target;

    rightBox.addEventListener("dragover",(e)=>{
      e.preventDefault();
    })
    rightBox.addEventListener("drop",()=>{
      rightBox.appendChild(selected);
      selected = null;
    })


    leftBox.addEventListener("dragover",(e)=>{
      e.preventDefault();
    })
    leftBox.addEventListener("drop",()=>{
    leftBox.appendChild(selected);
    selected = null
  })
  })
}