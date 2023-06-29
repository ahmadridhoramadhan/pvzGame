class Zombie {
    constructor() {
        this.lines = document.querySelectorAll('.line')
        this.sourceZombie = [
            "../Sprites/Zombie/frame_00_delay-0.05s.gif",
            "../Sprites/Zombie/frame_01_delay-0.05s.gif",
            "../Sprites/Zombie/frame_02_delay-0.05s.gif",
            "../Sprites/Zombie/frame_03_delay-0.05s.gif",
            "../Sprites/Zombie/frame_04_delay-0.05s.gif",
            "../Sprites/Zombie/frame_05_delay-0.05s.gif",
            "../Sprites/Zombie/frame_06_delay-0.05s.gif",
            "../Sprites/Zombie/frame_07_delay-0.05s.gif",
            "../Sprites/Zombie/frame_08_delay-0.05s.gif",
            "../Sprites/Zombie/frame_09_delay-0.05s.gif",
            "../Sprites/Zombie/frame_10_delay-0.05s.gif",
            "../Sprites/Zombie/frame_11_delay-0.05s.gif",
            "../Sprites/Zombie/frame_12_delay-0.05s.gif",
            "../Sprites/Zombie/frame_13_delay-0.05s.gif",
            "../Sprites/Zombie/frame_14_delay-0.05s.gif",
            "../Sprites/Zombie/frame_15_delay-0.05s.gif",
            "../Sprites/Zombie/frame_16_delay-0.05s.gif",
            "../Sprites/Zombie/frame_17_delay-0.05s.gif",
            "../Sprites/Zombie/frame_18_delay-0.05s.gif",
            "../Sprites/Zombie/frame_19_delay-0.05s.gif",
            "../Sprites/Zombie/frame_20_delay-0.05s.gif",
            "../Sprites/Zombie/frame_21_delay-0.05s.gif",
            "../Sprites/Zombie/frame_22_delay-0.05s.gif",
            "../Sprites/Zombie/frame_23_delay-0.05s.gif",
            "../Sprites/Zombie/frame_24_delay-0.05s.gif",
            "../Sprites/Zombie/frame_25_delay-0.05s.gif",
            "../Sprites/Zombie/frame_26_delay-0.05s.gif",
            "../Sprites/Zombie/frame_27_delay-0.05s.gif",
            "../Sprites/Zombie/frame_28_delay-0.05s.gif",
            "../Sprites/Zombie/frame_29_delay-0.05s.gif",
            "../Sprites/Zombie/frame_30_delay-0.05s.gif",
            "../Sprites/Zombie/frame_31_delay-0.05s.gif",
            "../Sprites/Zombie/frame_32_delay-0.05s.gif",
            "../Sprites/Zombie/frame_33_delay-0.05s.gif",
        ]
    }

    create() {
        const zombie = document.createElement('img')
        zombie.style.position = 'absolute'
        zombie.height = '89'
        zombie.style.right = 0
        zombie.classList.add('zombie')
        zombie.src = this.sourceZombie[0]
        zombie.dataset.health = 10

        this.lines[Math.floor(Math.random() * 5)].appendChild(zombie)
        // this.lines[1].appendChild(zombie)
        this.move(zombie)
        this.animationMove(zombie)
    }

    move(zombie) {
        let pos = parseInt(zombie.style.right)
        let biteRhythm = 0
        let delay = 50
        let slow = 0
        function animate() {
            if (zombie.parentNode) {
                if (document.body.dataset.gameRun == 'true') {

                    const zombieRect = zombie.getBoundingClientRect()
                    const belowZombies = (document.elementsFromPoint(zombieRect.left + 30, zombieRect.top + 40));

                    // jika zombie beeada dekat dengan plant maka akan memakan dan tidak akan berjalan
                    // setelah selesai makan maka zombie akan lanjut jalan
                    let plant = null
                    belowZombies.forEach(belowZombie => {
                        if (belowZombie.classList.contains('plant')) {
                            plant = belowZombie
                        }
                    });
                    if (plant) {
                        biteRhythm++
                        if (biteRhythm >= 24) {
                            biteRhythm = 0
                            plant.dataset.health = parseInt(plant.dataset.health) - 1
                        }
                    } else {
                        zombie.style.right = pos++ + 'px'
                    }

                    // jika health zombie 0 maka remove zombie
                    if (parseFloat(zombie.dataset.health) <= 0) {
                        zombie.remove()
                    }

                    // menambahkan effect dan menghilangkan filter effect
                    if (zombie.dataset.slow == 'true') {
                        slow++
                        delay = 300
                        if (slow >= 20) {
                            slow = 0
                            delay = 50
                            zombie.style.filter = ''
                            zombie.dataset.slow = false
                        }
                    } else {
                        zombie.style.filter = ''
                    }
                }

                if (pos <= 700) {
                    setTimeout(() => {
                        window.requestAnimationFrame(animate)
                    }, delay);
                }
            }
        }
        animate()
    }

    animationMove(zombie) {
        let i = 0

        const images = this.sourceZombie

        function animate() {
            i++
            if (i >= 34) {
                i = 0
            }

            zombie.src = images[i]

            if (zombie.parentNode) {
                setTimeout(() => {
                    window.requestAnimationFrame(animate)
                }, 50);
            }

        }
        animate()
    }
}