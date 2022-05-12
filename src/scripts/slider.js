let $rihtSwipeArrow = document.querySelector('.welcoming-slider-right-arrow');
let $leftSwipeArrow = document.querySelector('.welcoming-slider-left-arrow');
let $imgBgContainer = document.querySelector('.welcoming-slider-img-part');
let dotsContainer = document.querySelector('.dots-container');



const IMGCOUNT = 5;
let choosenImg;


if(localStorage.getItem('chsnImg'))
{
    choosenImg = localStorage.getItem('chsnImg');
    choosenImg -= 1;
    swipeRight();
}
    
else {
    choosenImg = 0;
    localStorage.setItem("chsnImg", choosenImg);
}
    



function swipeRight(){
    
    
    choosenImg = (choosenImg + 1) % IMGCOUNT;   
    localStorage.chsnImg = choosenImg;

    console.log(choosenImg);
    clearAllBtn(dotsContainer);
    changeBtnColor(dotsContainer, (choosenImg) % IMGCOUNT);

    switch (choosenImg){
        case 0:
            $imgBgContainer.style.backgroundImage = "url('slider-picture-one.jpg')";
            break;
        case 1:
            $imgBgContainer.style.backgroundImage = "url('slider-picture-two.jpg')";
            break;
        case 2: 
            $imgBgContainer.style.backgroundImage = "url('slider-picture-three.jpg')";
            break;
        case 3: 
            $imgBgContainer.style.backgroundImage = "url('slider-picture-fourth.jpg')";
            break;
        case 4: 
            $imgBgContainer.style.backgroundImage = "url('slider-picture-five.jpg')";
            break;
       
        default:
            console.log("The limit has been overflowed!!!");
    }
    
}


function swipeLeft(){

    if (choosenImg <= 0) {
        choosenImg = (IMGCOUNT - choosenImg - 1) % IMGCOUNT;
    } else{
        choosenImg = (choosenImg - 1) % IMGCOUNT;
    }

    localStorage.chsnImg = choosenImg;
    console.log(choosenImg);
    clearAllBtn(dotsContainer);
    changeBtnColor(dotsContainer, (choosenImg) % IMGCOUNT);
    
    switch (choosenImg){
        case 0:
            $imgBgContainer.style.backgroundImage = "url('slider-picture-one.jpg')";
            break;
        case 1:
            $imgBgContainer.style.backgroundImage = "url('slider-picture-two.jpg')";
            break;
        case 2: 
            $imgBgContainer.style.backgroundImage = "url('slider-picture-three.jpg')";
            break;
        case 3: 
            $imgBgContainer.style.backgroundImage = "url('slider-picture-fourth.jpg')";
            break;
        case 4: 
            $imgBgContainer.style.backgroundImage = "url('slider-picture-five.jpg')";
            break;
        
        default:
            console.log("The limit has been overflowed!!!");
    }
    
}


document.addEventListener('keydown', (event) => {
    if (event.keyCode == 37){
        swipeLeft();
    }
    if(event.keyCode == 39){
        swipeRight();
        
    }
})


function swipeToCertainSlide(n){
    clearAllBtn(dotsContainer);
    changeBtnColor(dotsContainer, n);
    choosenImg = n - 1;
    swipeRight();

}

function changeBtnColor(dotsContainer, n){
    let dot = dotsContainer.children[n];
    dot.classList.add("choosen");
    console.log( dotsContainer.children);
}

function clearAllBtn(dotsContainer){
    for(let i = 0; i < dotsContainer.children.length; i++){
        dotsContainer.children[i].classList.remove("choosen");
    }
}

