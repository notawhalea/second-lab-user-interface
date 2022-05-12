let $GRID = document.querySelector('.catalog');


let $firstSlideUp = document.querySelectorAll('.firstCatalogSlide')[0];
let $firstSlideDown = document.querySelectorAll('.firstCatalogSlide')[1];

let $secondSlideUp = document.querySelectorAll('.secondCatalogSlide')[0];
let $secondSlideDown = document.querySelectorAll('.secondCatalogSlide')[1];

let $thirdSlideUp = document.querySelectorAll('.thirdCatalogSlide')[0];
let $thirdSlideDown = document.querySelectorAll('.thirdCatalogSlide')[1];


let $selectSort = document.getElementById('sortSelect');

$selectSort.addEventListener('change', function() {
    const DATE  = 1;
    const PRICE = 2;
    const SIZE  = 3;
    
    switch(this.selectedIndex)
    {
        case 1:
            sortByDate($GRID);
            showDate($GRID);
            break;
        case 2:
            sortByPrices($GRID);
            hideDate($GRID);
            break;
        default:
            hideDate($GRID);
            break;
    }
})



const GRID_ELEMENTS_AMOUNT     = 9;
const GRID_ROW_ELEMENTS_AMOUNT = 3;
let girlsProperties            = [];
girlsProperties.length         = GRID_ELEMENTS_AMOUNT;



$firstSlideUp.addEventListener('click', () =>{
    changeRowsOrder($GRID, 0, 1);
})

$firstSlideDown.addEventListener('click', () =>{
    changeRowsOrder($GRID, 0, 1);
})


$secondSlideUp.addEventListener('click', () =>{
    changeRowsOrder($GRID, 0, 2);
})

$secondSlideDown.addEventListener('click', () =>{
    changeRowsOrder($GRID, 0, 2);
})

$thirdSlideUp.addEventListener('click', () => {
    changeRowsOrder($GRID, 1, 2);
})

$thirdSlideDown.addEventListener('click', () => {
    changeRowsOrder($GRID, 1, 2);
})


///////////////////////////////////////////////////////// MAIN////////////////////////////////////////////////////////////////////
setOrder($GRID);
initDate($GRID);
hideDate($GRID);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GENERATE RANDOM DATE
function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// INIT DATE
function initDate(grid) {
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].innerHTML += '<p style="font-size: 12px;">'+ generateRandomDate(new Date(2012, 0, 1), new Date()) + '</p>';
    }
}

// EXTRACT DATE

function extractDate(grid, pictIndex) {
    return Date.parse(grid.children[pictIndex].children[2].textContent);
}

function hideDate(grid) {
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].children[2].style.display = "none";
    }
}

function showDate(grid) {
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].children[2].style.display = "block";
    }
}


// SORT BY DATE
function sortByDate(grid)
{
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i) {
        for(let j = 0; j < GRID_ELEMENTS_AMOUNT; ++j) {
            if(extractDate(grid, i) < extractDate(grid, j) ) {
                swapPictures(grid, i, j);       
            }
        }
    }
}




///////////////////////////////////////////////////////// PRICES ////////////////////////////////////////////////////////////////////
//SORT BY PRICES
function sortByPrices(grid) {    
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i) {
        for(let j = 0; j < GRID_ELEMENTS_AMOUNT; ++j) {
            if(extractPriceFromGrid(grid, i) < extractPriceFromGrid(grid, j) ) {
                swapPictures(grid, i, j);       
            }
        }
    }
}




// EXTRACT PRICE
function extractPriceFromGrid(grid, elNum)
{
    return Number( grid.children[elNum].children[1].children[1].textContent.slice(1));
}

function extractPrice(el)
{
    return Number(el.children[1].children[1].textContent.slice(1));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// SET PICTURES ORDER
function setOrder(grid)
{
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].style.order = i;
    }
}

//CHAGE ROWS PICTURES (swap grid lines)
function changeRowsOrder(grid, row1, row2)
{   
    let tmp;
    let el1;
    let el2;
    for(let i = 0; i < GRID_ROW_ELEMENTS_AMOUNT; ++i)
    {
        el1 = grid.children[(row1*GRID_ROW_ELEMENTS_AMOUNT) + i];
        el2 = grid.children[(row2*GRID_ROW_ELEMENTS_AMOUNT) + i];

        tmp = el1.innerHTML;
        el1.innerHTML = el2.innerHTML;
        el2.innerHTML = tmp;
    }
}

//SWAP PICTURES
function swapPictures(grid, pict1Number, pict2Number)
{
    let tmp;
    let pict1 = grid.children[pict1Number];
    let pict2 = grid.children[pict2Number];

    tmp = pict1.innerHTML;
    pict1.innerHTML = pict2.innerHTML;
    pict2.innerHTML = tmp;
}

// CLEAR/FILL GRID
function extractGirlsProperties(girlsPropArr, grid)
{
    let girlsArr = grid.children;
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        girlsPropArr[i] = girlsArr[i].innerHTML;
    }

}

function clearGrid(grid)
{
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].innerHTML = "";
    }
}



function fillGrid(grid)
{
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].innerHTML = girlsProperties[i];
    }  
}


