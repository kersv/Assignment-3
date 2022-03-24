// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    console.log(numRows);
    let tablegrid = document.getElementById('grid')
    let row = document.createElement('tr')  
    let col = document.createElement('td')

    if(numCols === 0){
        row.appendChild(document.createElement("td"))
        tablegrid.appendChild(row)
        numCols++;
    }
    else{
        for(let i = 0; i < numCols; i++){
            row.appendChild(document.createElement("td"))
        }
        tablegrid.appendChild(row)
    }
    numRows++;


}

// Add a column
function addC() {
    let existRows = document.querySelectorAll('tr')
    let tablegrid = document.getElementById('grid')
    let col = document.createElement('td')
    let row = document.createElement('tr')

    if(numRows === 0){
        row.appendChild(document.createElement('td'))
        tablegrid.appendChild(row)
        numRows++;
    }
    else{
        for(let i = 0; i < numRows; i++){
            existRows[i].appendChild(document.createElement('td'))
        }
    }
    numCols++;

}

// Remove a row
function removeR() {
    
}

// Remove a column
function removeC() {
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}