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

    createErrorBoard() {
        this.board = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 6, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];
        
    }

    checkErrors() {
        let errors = [];
        for (let row = 0; row < 9; row++) {
            let seen = new Set();
            for (let col = 0; col < 9; col++) {
                let num = this.board[row][col];
                if (num > 0) {
                    if (seen.has(num)) {
                        errors.push({ type: 'row', index: row });
                    }
                    seen.add(num);
                }
            }
        }
        for (let col = 0; col < 9; col++) {
            let seen = new Set();
            for (let row = 0; row < 9; row++) {
                let num = this.board[row][col];
                if (num > 0) {
                    if (seen.has(num)) {
                        errors.push({ type: 'col', index: col });
                    }
                    seen.add(num);
                }
            }
        }
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let seen = new Set();
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        let num = this.board[boxRow * 3 + row][boxCol * 3 + col];
                        if (num > 0) {
                            if (seen.has(num)) {
                                errors.push({ type: 'box', index: boxRow * 3 + boxCol });
                            }
                            seen.add(num);
                        }
                    }
                }
            }
        }
        return errors;
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
        let grid = document.getElementById('field');
        grid.innerHTML = '';

        this.board.forEach(row => {
            row.forEach(num => {
                let cell = document.createElement('div');
                cell.className = 'cell';
                cell.innerText = num === 0 ? '' : num;
                grid.appendChild(cell);
            });
        });
    }

    colorGoodBoard() {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.add('good'));
    }

    colorErrors(errors) {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('error'));
    
        errors.forEach(error => {
            if (error.type === 'row') {
                for (let col = 0; col < 9; col++) {
                    cells[error.index * 9 + col].classList.add('error');
                }
            } else if (error.type === 'col') {
                for (let row = 0; row < 9; row++) {
                    cells[row * 9 + error.index].classList.add('error');
                }
            } else if (error.type === 'box') {
                let startRow = Math.floor(error.index / 3) * 3;
                let startCol = (error.index % 3) * 3;
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        cells[(startRow + r) * 9 + (startCol + c)].classList.add('error');
                    }
                }
            }
        });
    }
}

document.getElementById('new_board').addEventListener('click', () => {
    sudoku.resetBoard();
    sudoku.displayBoard();
});

document.getElementById('check_errors').addEventListener('click', () => { 
    let errors = sudoku.checkErrors(); 
    if (errors.length === 0) { 
        sudoku.colorGoodBoard(); 
    } else { 
        sudoku.colorErrors(errors); 
    } 
});

document.getElementById('generate_goodboard').addEventListener('click', () => {
    sudoku.generateGoodBoard();
    sudoku.displayBoard();
});

let sudoku = new Sudoku();

sudoku.createErrorBoard();
sudoku.displayBoard();
