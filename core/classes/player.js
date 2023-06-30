class Player {
    constructor(timerClass) {
        this.username = sessionStorage.getItem('username')
        if (!this.username) {
            window.location.href = '../index.html'
        }
        this.usernameDisplay = document.getElementById('player-display')
        this.usernameDisplay.textContent = this.username

        this.timer = timerClass

        this.score = 0
        this.scoreDisplay = document.getElementById('score-display')
        this.update()

        this.zombies = []

        this.cekZombieDestroyed()

        this.leaderBoard()
    }

    scoreIncrease() {
        this.score++
        this.update()
    }
    update() {
        this.scoreDisplay.textContent = this.score
    }

    cekZombieDestroyed() {
        const zombies = document.querySelectorAll('.zombie')

        if (zombies.length < this.zombies.length) {
            this.scoreIncrease()
        }
        this.zombies = zombies
        setTimeout(() => {
            window.requestAnimationFrame(this.cekZombieDestroyed.bind(this))
        }, 1000);
    }

    gameOver() {
        this.timer.stop()
        document.body.dataset.gameRun = false

        const gameOverDisplay = document.getElementById('game-over')
        gameOverDisplay.style.display = 'flex'

        const playerName = gameOverDisplay.querySelector('#game-over-player-display')
        const finalScore = gameOverDisplay.querySelector('#game-over-score-display')
        const finalTime = gameOverDisplay.querySelector('#game-over-time-display')

        playerName.textContent = this.username
        finalScore.textContent = this.score
        finalTime.textContent = sessionStorage.getItem('time')

        const dataScoreInputHidden = gameOverDisplay.querySelector('#dataScore')
        const data = {
            username: this.username,
            time: sessionStorage.getItem('time'),
            score: this.score
        }
        dataScoreInputHidden.value = JSON.stringify(data)
    }

    saveScore(event) {
        event.preventDefault()
        let dataScore = event.target.dataScore.value

        if (!dataScore) {
            alert('save Score failed!')
            return
        }

        dataScore = JSON.parse(dataScore)

        if (this.getCookie('dataScore')) {
            const prevData = JSON.parse(this.getCookie('dataScore'))
            prevData.push(dataScore)
            dataScore = JSON.stringify(prevData)
        } else {
            dataScore = JSON.stringify([dataScore])
        }

        const date = new Date()
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));

        document.cookie = `dataScore = ${dataScore}; expires=${date.toUTCString()}; path=/`
        alert('save score successful')
    }
    getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    leaderBoard(event) {

        let sortMethod = null
        if (event) {
            sortMethod = event.target.value
        }


        const leaderBoardContainer = document.getElementById('leaderboard')
        const listLeaderBoard = leaderBoardContainer.querySelector('#list-leaderboard')
        listLeaderBoard.textContent = ''

        const dataScores = JSON.parse(this.getCookie('dataScore'))

        if (!dataScores) return

        if (sortMethod == 'score') {
            dataScores.sort((a, b) => b.score - a.score)
        } else {
            dataScores.sort((a, b) => a.username.localeCompare(b.username))
        }

        dataScores.forEach(dataScore => {
            const listBox = `
                <div style="display: flex; justify-content: space-between; border-bottom: 2px solid gray; align-items: center; padding: 0.6rem 0;">
                    <div style="flex: auto;">
                        <p>${dataScore.username}</p>
                        <p style="font-size: small;">score : <span>${dataScore.score}</span></p>
                    </div>
                    <div>
                        <button type="button" style="padding: 0.4rem 0.7rem; background-color: orange;" onclick="player.detailPlayer(event)" data-player='${JSON.stringify(dataScore)}'>detail</button>
                    </div>
                </div>
            `
            listLeaderBoard.insertAdjacentHTML('beforeend', listBox)
        });
    }

    detailPlayer(event) {
        const detailPlayerDisplay = document.getElementById('player-detail')

        if (detailPlayerDisplay.style.display == 'flex') {
            detailPlayerDisplay.style.display = 'none'
            return
        }

        let data = event.target.dataset.player
        if (!data) return

        data = JSON.parse(data)

        detailPlayerDisplay.style.display = 'flex'

        const usernameDisplay = detailPlayerDisplay.querySelector('#username-detail-player-display')
        const scoreDisplay = detailPlayerDisplay.querySelector('#score-detail-player-display')
        const timeDisplay = detailPlayerDisplay.querySelector('#time-detail-player-display')

        usernameDisplay.textContent = data.username
        scoreDisplay.textContent = data.score
        timeDisplay.textContent = data.time

        console.log(detailPlayerDisplay.style.display);
    }

}