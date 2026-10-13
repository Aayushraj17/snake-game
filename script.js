const board = document.querySelector('.board');
const blockHeight = 30
// const blockWidth = 23
const blockWidth = 30

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks =[];

const snake =[
    {
    x:1 ,y :2
    },

    {
        x:1 ,y:3
    },

    {
        x:1 ,y:4
    },

];

let direction = "down";

// for (let i = 0; i < rows * cols ; i++) {
//     const block = document.createElement('div');
//     block.classList.add("block");
//     board.appendChild(block);

    
//     // to show the rows and columns
//     // block.innerText = `${row}${col}`
    
// }




board.style.display = "grid";
board.style.gridTemplateColumns = `repeat(${cols}, ${blockWidth}px)`;
board.style.gridTemplateRows = `repeat(${rows}, ${blockHeight}px)`;





for(let row = 0; row< rows; row++){
    for(let col = 0; col < cols; col++){

        const block = document.createElement("div");

        block.classList.add("block");
        // block.innerText = `${row}${col}`;

        board.appendChild(block);
        // to show the rows and columns 
        blocks[`${row}-${col}`] = block;
    }
}


// render function
function render(){

    document.querySelectorAll(".block").forEach((block)=>{
        block.classList.remove("fill")
    });

    snake.forEach(segment => {
      const block = blocks[`${segment.x}-${segment.y}`];

      if(block){
        block.classList.add("fill")
      }
    });
}

render();
// Interval function direction function 


setInterval(() => {

    let head = null

    if(direction === "left"){
        head = {x : snake[0].x , y : snake [0].y - 1}  
    }

    else if(direction === "right") {
        head = {x:snake [0].x , y: snake[0].y+1}
    }

    else if (direction === "down"){
        head = {x:snake [0].x +1 , y: snake[0].y}
    }

    else if(direction === "up"){
        head = {x:snake [0].x-1 , y: snake[0].y}
    }


    // stop the grid segment

     if (
        head &&
        head.x >= 0 &&
        head.x < rows &&
        head.y >= 0 &&
        head.y < cols
    ) {
        snake.unshift(head);
        snake.pop();
    } else {
        return;
    }

    render();
}, 200);




document.addEventListener("keydown",(event) =>{
    if(event.key === "ArrowUp"){
        direction ="up";
    }

    else if(event.key === "ArrowRight"){
        direction = "right";
    }

    else if(event.key === "ArrowDown"){
        direction= "down";
    }

    else if (event.key ==="ArrowLeft"){
        direction = "left";
    }
    
    
});




document.addEventListener("keydown",(event) =>{
    if(event.key === "w"){
        direction ="up";
    }

    else if(event.key === "d"){
        direction = "right";
    }

    else if(event.key === "s"){
        direction= "down";
    }

    else if (event.key ==="a"){
        direction = "left";
    }
    
});


