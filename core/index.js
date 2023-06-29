
const timer = new Timer()
const zombie = new Zombie()
const sun = new Sun()
const plant = new Plant(sun)
const player = new Player(timer)
const shovel = new Shovel()


let game = null

const gameRun = () => {
    const level = parseInt(sessionStorage.getItem('level'))
    if (!level) {
        window.location.href = '../index.html'
    }
    game = setInterval(() => {
        if (document.body.dataset.gameRun == 'false') {
            clearInterval(game)
        }

        if (level >= 1) {
            zombie.create()
        }
        if (level >= 2) {
            setTimeout(() => {
                zombie.create()
            }, 2000);
        }
        if (level >= 3) {
            setTimeout(() => {
                zombie.create()
            }, 4000);
        }
    }, 5000);
}
const gameStart = async () => {
    await timer.start()
    gameRun()
}
const gameContinue = () => {
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(event);
}
const gamePause = (event) => {
    if (event.key == 'Escape') {
        const pauseElement = document.getElementById('game-pause')
        if (document.body.dataset.gameRun == 'true') {
            document.body.dataset.gameRun = false
            pauseElement.style.display = 'flex'

            timer.stop()
            clearInterval(game)
        } else {
            pauseElement.style.display = 'none'
            document.body.dataset.gameRun = true

            gameRun()
        }
    }
}
const gameRestart = () => {
    window.location.reload()
}

gameStart()

const lawnmower = new Lawnmower(player)




document.addEventListener('keydown', gamePause)