
var sideX = 35;
var sideY = 70;
var side = 15;
var grassArr = []
var grassEaterArr = []
var bombArr = []
var predatorArr = []

var matrix = []



for (let i = 0; i < sideX; i++) {
    matrix.push([])
    for (let j = 0; j < sideY; j++) {
        matrix[i].push(0)
    }
}



function character(char, qantity) {
    for (let i = 0; i < qantity; i++) {
        var x = Math.floor(random(0, sideX));
        var y = Math.floor(random(0, sideY))
        matrix[x][y] = char;
    }
}


function setup() {
    character(1, 400);
    character(2, 150);
    character(3, 1);
    character(4, 2);

    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");
    frameRate(5);

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grE = new GrassEater(x, y, 2);
                grassEaterArr.push(grE);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 1);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var b = new Bomb(x, y, 4);
                bombArr.push(b);
            }
            else if (matrix[y][x] == 5) {
                var b = new Bomb(x, y, 5);
                bombArr.push(b);
            }


        }
    }
};



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");

            }
            else if (matrix[y][x] == 4) {
                fill("#0A0A0A");

            }
            else if (matrix[y][x] == 5) {
                fill("#282828");
            }

            rect(x * side, y * side, side, side);
        }

    }


    for (var i in grassArr) {
        grassArr[i].mul();
    };

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    };

    for (var i in predatorArr) {
        predatorArr[i].eat();
    };

    setTimeout(() => {
        setInterval(() => {
            for (var i in bombArr) {
                bombArr[i].eat();
            }
        }, 0)

    }, 3000)


    setTimeout(() => {
        for (var i in bombArr) {
            bombArr[i].die();
        }

    }, 3050)

}


