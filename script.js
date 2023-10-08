let color = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelector('body').addEventListener('click', function(e){
    if(e.target.tagName != 'BUTTON'){
        click = !click
        let draw = document.querySelector('#draw')
        if(click){
            draw.innerHTML = 'Now you can draw!!'
        }


        else{
            draw.innerHTML = 'Your not allowed to draw'
        }
    }


    })

    let select = document.getElementById('select')
    select.addEventListener('click', function(){
    let size = getSize();
    createBoard(size);


   
})
})

function createBoard(size){
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`

    let numDivs = size * size

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt('what will be the size of the board?')
    let message = document.querySelector('#message')
    if(input === ""){
        message.innerHTML = 'please provide a number'
    }

    else if(input < 0 || input > 100){
        message.innerHTML = 'please provide a number between 0 and 100'
    }
    
    else{
        message.innerHTML = 'now you play!!!'
        return input
    }
}

function colorDiv() {
    if(click){
    if (color === 'random') {
      this.style.backgroundColor = getRandomColor();
    } else if (color === 'black') {
      this.style.backgroundColor = 'black';
    }
  }}

function setColor(colorChoice){

     color = colorChoice;
}

function resetBoard(){
let divs = document.querySelectorAll("div")
divs.forEach((div) => div.style.backgroundColor = 'white')
}

    function getRandomColor() {
        // Generate random values for red, green, and blue channels
        const red = Math.floor(Math.random() * 256); // 0 to 255
        const green = Math.floor(Math.random() * 256); // 0 to 255
        const blue = Math.floor(Math.random() * 256); // 0 to 255
      
        // Create a CSS color string in the format "rgb(r, g, b)"
        const colorRandom = `rgb(${red}, ${green}, ${blue})`;
      
        return colorRandom;
      }

