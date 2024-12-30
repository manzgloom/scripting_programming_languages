class Sudoku {
    constructor() {
        this.board = this.createEmptyBoard();
    }

    createEmptyBoard() {
        return Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    resetBoard() {
        this.board = this.createEmptyBoard();
    }

    checkErrors() {
        let errors = [];

        for (let row = 0; row < 9; row++) {
            let seen = new Set();
            for (let col = 0; col < 9; col++) {
                let elem = this.board[row][col];
                if (elem > 0) {
                    if (seen.has(elem)) {
                        errors.push("Ошибка в строке", row + 1);
                    }
                    seen.add(elem);
                }
            }
        }

        for (let col = 0; col < 9; col++) {
            let seen = new Set();
            for (let row = 0; row < 9; row++) {
                let elem = this.board[row][col];
                if (elem > 0) {
                    if (seen.has(elem)) {
                        errors.push("Ошибка в столбце", col + 1);
                    }
                    seen.add(elem);
                }
            }
        }

        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let seen = new Set();
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        let elem = this.board[boxRow * 3 + row][boxCol * 3 + col];
                        if (elem > 0) {
                            if (seen.has(elem)) {
                                errors.push("Ошибка в квадрате", boxRow * 3 + boxCol + 1);
                            }
                            seen.add(elem);
                        }
                    }
                }
            }
        }

        return errors.length > 0 ? errors : ["Ошибок не найдено"];
    }

    generateGoodBoard() {
        this.resetBoard();
        this.fillBoard();
    }

    fillBoard() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    let numbers = this.shuffleArray([...Array(9).keys()].map(n => n + 1));
                    for (let num of numbers) {
                        if (this.isSafe(row, col, num)) {
                            this.board[row][col] = num;
                            if (this.fillBoard()) {
                                return true;
                            }
                            this.board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    isSafe(row, col, num) {
        for (let c = 0; c < 9; c++) {
            if (this.board[row][c] === num) return false;
        }
        for (let r = 0; r < 9; r++) {
            if (this.board[r][col] === num) return false;
        }
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (this.board[r][c] === num) return false;
            }
        }
        return true;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    displayBoard() {
        console.table(this.board);
    }
}

let sudoku = new Sudoku();
sudoku.generateGoodBoard();
sudoku.displayBoard();
console.log(sudoku.checkErrors());