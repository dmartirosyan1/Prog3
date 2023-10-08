class Bomb extends LivingCreature {
    constructor(x, y, index) {
       super(x,y, index)
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }

    


    eat() {

        let foods = this.chooseCell(0, 1, 2)
        let food = random(foods)
        if (food) {

            let newX = food[0]
            let newY = food[1]

            matrix[food[1]][food[0]] = 5


            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);

                }
            }

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassArr.splice(i, 1);

                }
            }

        }
    };


    die() {

        matrix[this.y][this.x] = 0;
        for (var i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
                matrix[this.y][this.x] = 5;

                break;
            }
        }
    }
}



