
initSize($GRID);
hideSize($GRID);





function showAppropriateSize(grid, size)
{
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        if(extractSize(grid, i) == size) 
            grid.children[i].style.display = "block";
        else 
            grid.children[i].style.display = "none";
    }
}

//GENERATE RANDOM SIZE
function generateRandomSize(min = 0, max = 5) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    switch (rand) {
        case 0: return "XS"
        case 1: return "S"
        case 2: return "M"
        case 3: return "L"
        case 4: return "XL"
    }
}


// INIT SIZE
function initSize(grid) {
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].innerHTML += '<p style="font-size: 12px;">'+ generateRandomSize() + '</p>';
    }
}


// EXTRACT SIZE

function extractSize(grid, pictIndex) {
    return grid.children[pictIndex].children[3].textContent;
}

function hideSize(grid) {
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].children[3].style.display = "none";
    }
}

function showSize(grid) {
    for(let i = 0; i < GRID_ELEMENTS_AMOUNT; ++i)
    {
        grid.children[i].children[3].style.display = "block";
    }
}


