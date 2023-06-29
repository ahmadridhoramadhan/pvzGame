class Lawnmower {
    constructor(playerClass) {
        this.lawnmowers = document.querySelectorAll('.lawnmower')
        this.lines = document.querySelectorAll('.line')

        this.player = playerClass

        this.watch()
    }

    watch() {
        this.lawnmowers.forEach((lawnmower, i) => {
            if (this.lines[i].querySelectorAll('.zombie')[0]) {
                if (50 > this.lines[i].querySelectorAll('.zombie')[0].offsetLeft) {
                    if (lawnmower.parentNode) {
                        this.move(lawnmower, this.lines[i].querySelectorAll('.zombie'))
                    } else {
                        // game over
                        this.player.gameOver()
                        return
                    }
                }
            }
        });

        setTimeout(() => {
            window.requestAnimationFrame(this.watch.bind(this))
        }, 1000);
    }

    move(lawnmower, zombies) {
        let pos = lawnmower.offsetLeft

        lawnmower.src = '../Sprites/General/lawnmowerActivated.gif'

        function animate() {
            pos++
            lawnmower.style.left = pos++ + 'px'


            zombies.forEach(zombie => {
                if (lawnmower.offsetLeft >= zombie.offsetLeft - 80) {
                    zombie.remove()
                }
            });

            if (lawnmower.parentNode && parseInt(lawnmower.style.left) <= 680) {
                window.requestAnimationFrame(animate)
            } else {
                lawnmower.remove()
            }
        }

        animate()
    }
}