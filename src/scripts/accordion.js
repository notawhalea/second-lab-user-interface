let acc = document.getElementsByClassName("accordion");
let accContainer = document.querySelector('.accord');
let allPanels = document.querySelectorAll('.panel');
let allAccords = document.querySelectorAll('.accordion');
let i;




function openCertainAccord(allAccords, allPanels, index)
{
  allAccords[index].classList.add("active");
  allPanels[index].style.display = "block";
}

if(localStorage.getItem("accordState") && localStorage.getItem("accordState") < 5){
  openCertainAccord(allAccords, allPanels, localStorage.getItem("accordState"));
}

// console.log("Local storage: ", localStorage.getItem("accordState"));

function colapseAllMinuses(acc, index) {
    for(let i = 0; i < acc.length; ++i)
    {
        if(i == index) continue;
        acc[i].classList.remove("active");
    }
}

function colapseAllText(arr, index)
{
    for(let i = 0; i < arr.length; ++i)
    {
        if(i == index) continue;
        arr[i].style.display = "none";
    }
}

function findIndex(arr, el)
{
    for(let i = 0; i < arr.length; ++i)
    {
        if(arr[i] == el)
            return i;
    }
}



for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    localStorage.setItem("accordState",  findIndex(allAccords, this));
    colapseAllMinuses(allAccords, findIndex(allAccords, this));
    this.classList.toggle("active");
    
    colapseAllText(allPanels, findIndex(allPanels, this.nextElementSibling));
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
   
  });
}