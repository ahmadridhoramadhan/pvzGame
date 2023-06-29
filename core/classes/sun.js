class Sun {
    constructor() {
        this.sun = 50
        this.valueDisplay = document.getElementById('sun-value-display')
        this.update()

        this.display = document.querySelector('.game')

        this.randomSunEvery3Second()
    }

    randomSunEvery3Second() {
        if (document.body.dataset.gameRun == 'true') {
            this.createRandomSun()
        }
        setTimeout(() => {
            window.requestAnimationFrame(this.randomSunEvery3Second.bind(this))
        }, 3000);
    }

    createRandomSun() {
        let maxY = 570
        let minY = 100

        let minX = 20
        let maxX = 790

        let y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        let x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

        const sun = `<img src="../Sprites/General/Sun.png" width="40" style="position: absolute; left: ${x}px; top: ${y}px;" alt="sun" onclick="sun.increase(event)">`

        this.display.insertAdjacentHTML('beforeend', sun)
    }

    summonNearSunFlower(sunFlower) {
        const sun = `<img src="../Sprites/General/Sun.png" style="position:absolute;" width="40" alt="sun" onclick="sun.increase(event)">`
        sunFlower.parentElement.insertAdjacentHTML('beforeend', sun)
    }

    increase(event) {
        event.target.remove()
        this.sun += 25
        this.update()
    }
    update() {
        this.valueDisplay.textContent = this.sun
    }

    doExchange(howMuch) {
        if (this.sun < howMuch) return false
        this.sun = this.sun - howMuch
        this.update()
        return true
    }
}