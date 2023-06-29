class Timer {
    constructor() {
        this.second = 0
        this.minute = 0

        this.intervalId = null

        this.display = document.getElementById('time-display')
    }

    async start() {
        await this.countdown()
        this.intervalId = setInterval(() => {
            this.update()
        }, 1000);
    }
    update() {
        this.second++
        if (this.second >= 60) {
            this.second = 0
            this.minute++
        }

        const time = this.minute.toString().padStart(2, 0) + ':' + this.second.toString().padStart(2, 0)
        sessionStorage.setItem('time', time)
        this.display.textContent = time
    }
    stop() {
        clearInterval(this.intervalId)
    }
    restart() {
        this.stop()
        this.minute = 0
        this.second = 0
        this.display.textContent = '00:00'
    }
    async countdown() {
        const countdown = document.getElementById('countdown')
        countdown.style.display = 'flex'

        for (let index = 3; index >= 0; index--) {
            countdown.textContent = index
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        countdown.style.display = 'none'
    }
}