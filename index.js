const map = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

let player = document.querySelector('.square_P')

let points = 0

const pointsCounter = document.createElement('header')
pointsCounter.textContent = points + '/1000'
document.querySelector('body').append(pointsCounter)

let PPosition = { x: 0, y: 0 }

let Y01Position = { x: 0, y: 1 }
let A01Position = { x: 0, y: 2 }
let B01Position = { x: 0, y: 3 }
let M01Position = { x: 0, y: 4 }

let B02Position = { x: 1, y: 0 }
let L01Position = { x: 1, y: 1 }
let I01Position = { x: 1, y: 2 }
let A02Position = { x: 1, y: 3 }
let S01Position = { x: 1, y: 4 }

let Y02Position = { x: 2, y: 0 }
let M02Position = { x: 2, y: 1 }
let K01Position = { x: 2, y: 2 }
let O01Position = { x: 2, y: 3 }
let K02Position = { x: 2, y: 4 }

let H01Position = { x: 3, y: 0 }
let S02Position = { x: 3, y: 1 }
let L02Position = { x: 3, y: 2 }
let I02Position = { x: 3, y: 3 }
let U01Position = { x: 3, y: 4 }

let B03Position = { x: 4, y: 0 }
let O02Position = { x: 4, y: 1 }
let H02Position = { x: 4, y: 2 }
let S03Position = { x: 4, y: 3 }

function Move(x, y) {
    return map[x][y] === 0
}

function Reload() {
    location.reload()
}

function updatePlayerPosition() {
    player.style.top = PPosition.x * 3 + 'rem'
    player.style.left = PPosition.y * 3 + 'rem'

    if(Y01Position.x === 0 && Y01Position.y === 1 & PPosition.x === 0 && PPosition.y === 1) {
        document.querySelector('.square_Y01').style.visibility = 'hidden'
        Y01Position = { x: -1, y: -1 }
        points += 70
    }

    if(A01Position.x === 0 && A01Position.y === 2 & PPosition.x === 0 && PPosition.y === 2) {
        document.querySelector('.square_A01').style.visibility = 'hidden'
        A01Position = { x: -1, y: -1 }
        points += 40
    }

    if(B01Position.x === 0 && B01Position.y === 3 & PPosition.x === 0 && PPosition.y === 3) {
        document.querySelector('.square_B01').style.visibility = 'hidden'
        B01Position = { x: -1, y: -1 }
        points += 500
    }

    if(M01Position.x === 0 && M01Position.y === 4 & PPosition.x === 0 && PPosition.y === 4) {
        document.querySelector('.square_M01').style.visibility = 'hidden'
        M01Position = { x: -1, y: -1 }
        points += 90
    }


    if(B02Position.x === 1 && B02Position.y === 0 & PPosition.x === 1 && PPosition.y === 0) {
        document.querySelector('.square_B02').style.visibility = 'hidden'
        B02Position = { x: -1, y: -1 }
        points += 500
    }

    if(L01Position.x === 1 && L01Position.y === 1 & PPosition.x === 1 && PPosition.y === 1) {
        document.querySelector('.square_L01').style.visibility = 'hidden'
        L01Position = { x: -1, y: -1 }
        points += 20
    }

    if(I01Position.x === 1 && I01Position.y === 2 & PPosition.x === 1 && PPosition.y === 2) {
        document.querySelector('.square_I01').style.visibility = 'hidden'
        I01Position = { x: -1, y: -1 }
        points += 60
    }

    if(A02Position.x === 1 && A02Position.y === 3 & PPosition.x === 1 && PPosition.y === 3) {
        document.querySelector('.square_A02').style.visibility = 'hidden'
        A02Position = { x: -1, y: -1 }
        points += 40
    }

    if(S01Position.x === 1 && S01Position.y === 4 & PPosition.x === 1 && PPosition.y === 4) {
        document.querySelector('.square_S01').style.visibility = 'hidden'
        S01Position = { x: -1, y: -1 }
        points += 110
    }


    if(Y02Position.x === 2 && Y02Position.y === 0 & PPosition.x === 2 && PPosition.y === 0) {
        document.querySelector('.square_Y02').style.visibility = 'hidden'
        Y02Position = { x: -1, y: -1 }
        points += 70
    }

    if(M02Position.x === 2 && M02Position.y === 1 & PPosition.x === 2 && PPosition.y === 1) {
        document.querySelector('.square_M02').style.visibility = 'hidden'
        M02Position = { x: -1, y: -1 }
        points += 90
    }

    if(K01Position.x === 2 && K01Position.y === 2 & PPosition.x === 2 && PPosition.y === 2) {
        document.querySelector('.square_K01').style.visibility = 'hidden'
        K01Position = { x: -1, y: -1 }
        points += 140
    }

    if(O01Position.x === 2 && O01Position.y === 3 & PPosition.x === 2 && PPosition.y === 3) {
        document.querySelector('.square_O01').style.visibility = 'hidden'
        O01Position = { x: -1, y: -1 }
        points += 50
    }

    if(K02Position.x === 2 && K02Position.y === 4 & PPosition.x === 2 && PPosition.y === 4) {
        document.querySelector('.square_K02').style.visibility = 'hidden'
        K02Position = { x: -1, y: -1 }
        points += 140
    }


    if(H01Position.x === 3 && H01Position.y === 0 & PPosition.x === 3 && PPosition.y === 0) {
        document.querySelector('.square_H01').style.visibility = 'hidden'
        H01Position = { x: -1, y: -1 }
        points += 80
    }

    if(S02Position.x === 3 && S02Position.y === 1 & PPosition.x === 3 && PPosition.y === 1) {
        document.querySelector('.square_S02').style.visibility = 'hidden'
        S02Position = { x: -1, y: -1 }
        points += 110
    }

    if(L02Position.x === 3 && L02Position.y === 2 & PPosition.x === 3 && PPosition.y === 2) {
        document.querySelector('.square_L02').style.visibility = 'hidden'
        L02Position = { x: -1, y: -1 }
        points += 20
    }

    if(I02Position.x === 3 && I02Position.y === 3 & PPosition.x === 3 && PPosition.y === 3) {
        document.querySelector('.square_I02').style.visibility = 'hidden'
        I02Position = { x: -1, y: -1 }
        points += 10
    }

    if(U01Position.x === 3 && U01Position.y === 4 & PPosition.x === 3 && PPosition.y === 4) {
        document.querySelector('.square_U01').style.visibility = 'hidden'
        U01Position = { x: -1, y: -1 }
        points += 150
    }


    if(B03Position.x === 4 && B03Position.y === 0 & PPosition.x === 4 && PPosition.y === 0) {
        document.querySelector('.square_B03').style.visibility = 'hidden'
        B03Position = { x: -1, y: -1 }
        points += 500
    }

    if(O02Position.x === 4 && O02Position.y === 1 & PPosition.x === 4 && PPosition.y === 1) {
        document.querySelector('.square_O02').style.visibility = 'hidden'
        O02Position = { x: -1, y: -1 }
        points += 50
    }

    if(H02Position.x === 4 && H02Position.y === 2 & PPosition.x === 4 && PPosition.y === 2) {
        document.querySelector('.square_H02').style.visibility = 'hidden'
        H02Position = { x: -1, y: -1 }
        points += 80
    }

    if(S03Position.x === 4 && S03Position.y === 3 & PPosition.x === 4 && PPosition.y === 3) {
        document.querySelector('.square_S03').style.visibility = 'hidden'
        S03Position = { x: -1, y: -1 }
        points += 110
    }

    if(PPosition.x === 4 && PPosition.y === 4 && points === 1000) {
        setTimeout(Reload, 2500)
    } else if(PPosition.x === 4 && PPosition.y === 4 && points !== 1000) {
        location.reload()
    }

    pointsCounter.textContent = points + '/1000'

    if(points > 1000) location.reload()
}

function MoveUp() {
    player.style.rotate = 0 + 'deg'
    if(Move(PPosition.x - 1, PPosition.y)) {
        PPosition.x --
        updatePlayerPosition()
    }
}

function MoveLeft() {
    player.style.rotate = -90 + 'deg'
    if(Move(PPosition.x, PPosition.y - 1)) {
        PPosition.y --
        updatePlayerPosition()
    }
}

function MoveDown() {
    player.style.rotate = 180 + 'deg'
    if(Move(PPosition.x + 1, PPosition.y)) {
        PPosition.x ++
        updatePlayerPosition()
    }
}

function MoveRight() {
    player.style.rotate = 90 + 'deg'
    if(Move(PPosition.x, PPosition.y + 1)) {
        PPosition.y ++
        updatePlayerPosition()
    }
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'w':
            MoveUp()
            break
        case 'a':
            MoveLeft()
            break
        case 's':
            MoveDown()
            break
        case 'd':
            MoveRight()
            break
        default: break
    }
})