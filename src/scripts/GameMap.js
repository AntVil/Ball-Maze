class GameMap{
    constructor(){
        
    }

    generateMap(){
        let grid = [];
        for(let y=0;y<MAP_HEIGHT;y++){
            let row = [];
            for(let x=0;x<MAP_WIDTH;x++){
                let possible = {};
                if(x !== 0){
                    possible["left"] = true;
                }
                if(x !== MAP_WIDTH-1){
                    possible["right"] = true;
                }
                if(y !== 0){
                    possible["up"] = true;
                }
                if(y !== MAP_HEIGHT-1){
                    possible["down"] = true;
                }
                possible["visited"] = false;
                row.push(possible);
            }
            grid.push(row);
        }

        let trace = [
            [
                Math.floor(Math.random() * MAP_HEIGHT),
                Math.floor(Math.random() * MAP_WIDTH)
            ]
        ];

        while(trace.length > 0){
            let y = trace[0][0];
            let x = trace[0][1];

            grid[y][x]["visited"] = true;

            let possible = [];
            for(let direction of Object.keys(grid[y][x])){
                let isVisited = true;
                if(direction === "left"){
                    isVisited = grid[y][x-1]["visited"]
                }else if(direction === "right"){
                    isVisited = grid[y][x+1]["visited"]
                }else if(direction === "up"){
                    isVisited = grid[y-1][x]["visited"]
                }else if(direction === "down"){
                    isVisited = grid[y+1][x]["visited"]
                }
                if(!isVisited){
                    possible.push(direction);
                }
            }

            if(possible.length > 0){
                let chosen = possible[Math.floor(Math.random() * possible.length)];
                if(chosen === "left"){
                    grid[y][x]["left"] = false;
                    x -= 1;
                    grid[y][x]["right"] = false;
                }else if(chosen === "right"){
                    grid[y][x]["right"] = false;
                    x += 1;
                    grid[y][x]["left"] = false;
                }else if(chosen === "up"){
                    grid[y][x]["up"] = false;
                    y -= 1;
                    grid[y][x]["down"] = false;
                }else if(chosen === "down"){
                    grid[y][x]["down"] = false;
                    y += 1
                    grid[y][x]["up"] = false;
                }
                trace.unshift([y, x]);
            }else{
                trace.shift();
            }
        }
        
        const BLOCK_WIDTH = 0.1;
        const WALL_SIZE = 1;
        const WALL_CHANCE = 0.8;

        let blocks = [];
        for(let y=0;y<grid.length;y++){
            for(let x=0;x<grid[y].length;x++){
                if(grid[y][x]["right"] && Math.random() < WALL_CHANCE){
                    blocks.push(new Block(
                        x + BLOCK_WIDTH/2 + 1,
                        y + WALL_SIZE/2 + BLOCK_WIDTH/2,
                        BLOCK_WIDTH,
                        WALL_SIZE + BLOCK_WIDTH
                    ));
                }
                if(grid[y][x]["down"] && Math.random() < WALL_CHANCE){
                    blocks.push(new Block(
                        x + WALL_SIZE/2 + BLOCK_WIDTH/2,
                        y + BLOCK_WIDTH/2 + 1,
                        WALL_SIZE + BLOCK_WIDTH,
                        BLOCK_WIDTH
                    ));
                }
                
            }
        }
        return blocks;
    }
}