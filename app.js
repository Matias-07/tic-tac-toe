const buttons = document.querySelectorAll('.container button');
let turn = 0;
const board = [];
let gameEnded = false;

const buttonPress = (e, pos) => {
    const button = e.target;

    if (gameEnded || board[pos]) {
        return;
    }

    button.dataset.pressed = "true";
    turn++
    const color = turn % 2 ? '#ADD8E6' : '#cd5c5c ';
    button.style.backgroundColor = color
    const cruzImg = button.querySelector('#Cruz');
    const circleImg = button.querySelector('#circle');
    if (turn % 2 === 0) {
        if (cruzImg) {
            cruzImg.style.display = 'block';
        }
    } else {
        if (circleImg) {
            circleImg.style.display = 'block';
        }
    }

    board[pos] = color

    if (youWin()) {
        alert('YOU WON!! CONGRATULATIONS!');
        gameEnded = true;
        return;
    }

    button.removeEventListener('click', buttonPress);
}

const youWin = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0]) {
        return true
    } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
        return true
    } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
        return true
    } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
        return true
    } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
        return true
    } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
        return true
    } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
        return true
    } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
        return true
    }
    return false;
}

document.querySelectorAll('button').forEach((obj, i) =>
    obj.addEventListener('click', (e) => buttonPress(e, i)));
