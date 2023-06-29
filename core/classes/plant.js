class Plant {
    constructor(sunClass) {

        // disini sangant sensitive terhadap urutan jadi 
        // jika anda merubah urutan nya kemungkinan game tidak akan berhalan dengan baik dan
        // bekemungkianan menimbulkan error


        this.sun = sunClass

        const sourceFrameIcePea = [
            "../Sprites/IcePea/frame_02_delay-0.12s.gif",
            "../Sprites/IcePea/frame_03_delay-0.12s.gif",
            "../Sprites/IcePea/frame_04_delay-0.12s.gif",
            "../Sprites/IcePea/frame_05_delay-0.12s.gif",
            "../Sprites/IcePea/frame_06_delay-0.12s.gif",
            "../Sprites/IcePea/frame_07_delay-0.12s.gif",
            "../Sprites/IcePea/frame_08_delay-0.12s.gif",
            "../Sprites/IcePea/frame_09_delay-0.12s.gif",
            "../Sprites/IcePea/frame_10_delay-0.12s.gif",
            "../Sprites/IcePea/frame_11_delay-0.12s.gif",
            "../Sprites/IcePea/frame_12_delay-0.12s.gif",
            "../Sprites/IcePea/frame_13_delay-0.12s.gif",
            "../Sprites/IcePea/frame_14_delay-0.12s.gif",
            "../Sprites/IcePea/frame_15_delay-0.12s.gif",
            "../Sprites/IcePea/frame_16_delay-0.12s.gif",
            "../Sprites/IcePea/frame_17_delay-0.12s.gif",
            "../Sprites/IcePea/frame_18_delay-0.12s.gif",
            "../Sprites/IcePea/frame_19_delay-0.12s.gif",
            "../Sprites/IcePea/frame_20_delay-0.12s.gif",
            "../Sprites/IcePea/frame_21_delay-0.12s.gif",
            "../Sprites/IcePea/frame_22_delay-0.12s.gif",
            "../Sprites/IcePea/frame_23_delay-0.12s.gif",
            "../Sprites/IcePea/frame_24_delay-0.12s.gif",
            "../Sprites/IcePea/frame_25_delay-0.12s.gif",
            "../Sprites/IcePea/frame_26_delay-0.12s.gif",
            "../Sprites/IcePea/frame_27_delay-0.12s.gif",
            "../Sprites/IcePea/frame_28_delay-0.12s.gif",
            "../Sprites/IcePea/frame_29_delay-0.12s.gif",
            "../Sprites/IcePea/frame_30_delay-0.12s.gif",
            "../Sprites/IcePea/frame_31_delay-0.12s.gif",
        ]
        const sourceFramePieShooter = [
            "../Sprites/PeaShooter/frame_00_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_01_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_02_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_03_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_04_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_05_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_06_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_07_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_08_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_09_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_10_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_11_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_12_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_13_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_14_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_15_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_16_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_17_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_18_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_19_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_20_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_21_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_22_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_23_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_24_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_25_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_26_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_27_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_28_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_29_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_30_delay-0.12s.gif",
        ]
        const sourceFrameSunFlower = [
            "../Sprites/SunFlower/frame_00_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_02_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_03_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_04_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_05_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_06_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_07_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_08_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_09_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_10_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_11_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_12_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_13_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_14_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_15_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_16_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_17_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_18_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_19_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_20_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_21_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_22_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_23_delay-0.06s.gif",
            "../Sprites/SunFlower/frame_24_delay-0.06s.gif",
        ]
        const sourceFrameWallNut = [
            "../Sprites/WallNut/frame_00_delay-0.12s.gif",
            "../Sprites/WallNut/frame_01_delay-0.12s.gif",
            "../Sprites/WallNut/frame_02_delay-0.12s.gif",
            "../Sprites/WallNut/frame_03_delay-0.12s.gif",
            "../Sprites/WallNut/frame_04_delay-0.12s.gif",
            "../Sprites/WallNut/frame_05_delay-0.12s.gif",
            "../Sprites/WallNut/frame_06_delay-0.12s.gif",
            "../Sprites/WallNut/frame_07_delay-0.12s.gif",
            "../Sprites/WallNut/frame_08_delay-0.12s.gif",
            "../Sprites/WallNut/frame_09_delay-0.12s.gif",
            "../Sprites/WallNut/frame_10_delay-0.12s.gif",
            "../Sprites/WallNut/frame_11_delay-0.12s.gif",
            "../Sprites/WallNut/frame_12_delay-0.12s.gif",
            "../Sprites/WallNut/frame_13_delay-0.12s.gif",
            "../Sprites/WallNut/frame_14_delay-0.12s.gif",
            "../Sprites/WallNut/frame_15_delay-0.12s.gif",
            "../Sprites/WallNut/frame_16_delay-0.12s.gif",
            "../Sprites/WallNut/frame_17_delay-0.12s.gif",
            "../Sprites/WallNut/frame_18_delay-0.12s.gif",
            "../Sprites/WallNut/frame_19_delay-0.12s.gif",
            "../Sprites/WallNut/frame_20_delay-0.12s.gif",
            "../Sprites/WallNut/frame_21_delay-0.12s.gif",
            "../Sprites/WallNut/frame_22_delay-0.12s.gif",
            "../Sprites/WallNut/frame_23_delay-0.12s.gif",
            "../Sprites/WallNut/frame_24_delay-0.12s.gif",
            "../Sprites/WallNut/frame_25_delay-0.12s.gif",
            "../Sprites/WallNut/frame_26_delay-0.12s.gif",
            "../Sprites/WallNut/frame_27_delay-0.12s.gif",
            "../Sprites/WallNut/frame_28_delay-0.12s.gif",
            "../Sprites/WallNut/frame_29_delay-0.12s.gif",
            "../Sprites/WallNut/frame_30_delay-0.12s.gif",
            "../Sprites/WallNut/frame_31_delay-0.12s.gif",
            "../Sprites/WallNut/frame_32_delay-1s.gif",
        ]


        this.displayPlantsCard = document.getElementById('plant-card')
        this.sourcePlantsCard = [
            '../Sprites/Seeds/IcePeaSeed.png',
            '../Sprites/Seeds/PeaShooterSeed.png',
            '../Sprites/Seeds/SunFlowerSeed.png',
            '../Sprites/Seeds/WallNutSeed.png'
        ]
        this.thumbnailPlants = [
            "../Sprites/IcePea/frame_02_delay-0.12s.gif",
            "../Sprites/PeaShooter/frame_00_delay-0.12s.gif",
            "../Sprites/SunFlower/frame_00_delay-0.06s.gif",
            "../Sprites/WallNut/frame_00_delay-0.12s.gif",
        ]
        this.sourcesPlants = [
            sourceFrameIcePea,
            sourceFramePieShooter,
            sourceFrameSunFlower,
            sourceFrameWallNut,
        ]

        this.selectedSeed
        this.runScript = [
            'plant.icePea(event)',
            'plant.peaShooter(event)',
            'plant.sunFlower(event)',
            '',
        ]
        this.health = [
            2,
            2,
            2,
            5,
        ]
        this.price = [
            175,
            100,
            50,
            50,
        ]

        this.randomPlantCard()
        this.randomPlantCard()
        this.randomPlantCard()
        this.randomPlantCard()



        // this.replacePreviewWithPlant()
    }

    animation(source, elementTarget, maxFrame, delay) {
        let i = 0

        function animate() {
            i++
            if (i >= maxFrame) {
                i = 0
            }

            elementTarget.src = source[i]

            if (elementTarget.dataset.health <= 0) {
                elementTarget.remove()
            }

            if (elementTarget.parentNode) {
                setTimeout(() => {
                    window.requestAnimationFrame(animate)
                }, delay);
            }
        }
        animate()
    }




    randomPlantCard() {
        const randomNum = Math.floor(Math.random() * 4)

        const buttonPlantCard = document.createElement('button')
        buttonPlantCard.type = 'button'
        buttonPlantCard.setAttribute('onblur', "plant.blur(event)");

        const plantCard = `<img src="${this.sourcePlantsCard[randomNum]}" alt="" data-first-load="true" onclick="plant.click(event)" data-source-order="${randomNum}" data-thumbnail="${this.sourcesPlants[randomNum][randomNum]}"  onblur="plant.blur(event)">`
        buttonPlantCard.insertAdjacentHTML('afterbegin', plantCard)

        this.displayPlantsCard.appendChild(buttonPlantCard)
    }

    // seed card
    click(event) {
        sessionStorage.setItem('putPlant', event.target.dataset.thumbnail)
        sessionStorage.setItem('sourceOrder', event.target.dataset.sourceOrder)
        event.target.classList.add('seed-selected')
    }
    blur(event) {
        event.target.firstChild.classList.remove('seed-selected')
        sessionStorage.removeItem('putPlant')
        sessionStorage.removeItem('sourceOrder')
        this.selectedSeed = event.target.firstChild
    }






    replacePreviewWithPlant(event) {
        // jika selected seed nya tidak ada maka return
        if (!this.selectedSeed) return

        // jika target bukan img dan class nya bukan preview-seed maka return
        if (!(event.target.tagName === 'IMG' && event.target.classList.contains('preview-seed'))) return

        // select preview seed dan cek sekali lagi jika itu tidak ada maka return
        const previewSeed = document.querySelector('.preview-seed')
        if (!previewSeed) return

        // ambil uturtan source
        const sourceOrder = previewSeed.dataset.sourceOrder

        // jika harga nya kurang maka akan preview seed akan dihapus dan return
        if (!this.sun.doExchange(this.price[sourceOrder])) {
            previewSeed.remove()
            return
        }

        // selected seed akan dihapus dan membuat kartu baru secara random
        this.selectedSeed.remove()
        this.randomPlantCard()

        // membuat img yang assetnya sesuai urutan source
        const plant = document.createElement('img')
        plant.dataset.firstLoad = 'true'
        plant.classList.add('plant')
        plant.setAttribute('onload', this.runScript[sourceOrder])
        plant.dataset.health = this.health[sourceOrder]

        // ganti preview seed plant dengan plant
        previewSeed.replaceWith(plant)

        // beri animasi pada plant yang baru saja ditambahkan
        this.animation(this.sourcesPlants[sourceOrder], plant, this.sourcesPlants[sourceOrder].length, 120)
    }

    previewSelectedSeed(event) {
        if (sessionStorage.getItem('putPlant')) {

            // remove bekas preview di block sebelumnya
            if (event.target.tagName !== 'IMG') {
                const prevTarget = event.target.querySelector('.preview-seed')

                if (!prevTarget) {
                    const previousPreviewSeed = event.target.parentElement.querySelector('.preview-seed')
                    if (previousPreviewSeed) {
                        previousPreviewSeed.remove()
                    }
                }
            }


            // tambahkan preview untuk seed berdasarkan dimana mouse berada
            const thumbnailPutPlant = document.createElement('img')
            thumbnailPutPlant.src = sessionStorage.getItem('putPlant')
            thumbnailPutPlant.style.opacity = '0.5'
            thumbnailPutPlant.classList.add('preview-seed')
            thumbnailPutPlant.dataset.sourceOrder = sessionStorage.getItem('sourceOrder')
            if (event.target.tagName !== 'IMG') {
                event.target.appendChild(thumbnailPutPlant)
            }
        }
    }





    icePea(event) {
        if (event.target.dataset.firstLoad == 'true') {
            event.target.dataset.firstLoad = false

            const target = event.target
            const bulletAnimate = this.bulletMoveAnimation

            function spawnBullet() {
                const bulletImage = document.createElement('img')
                bulletImage.width = 30
                bulletImage.height = 30
                bulletImage.style.position = 'absolute'
                bulletImage.src = "../Sprites/General/IcePea.png"
                bulletImage.style.left = target.offsetLeft + target.offsetWidth + 'px'

                if (target.parentNode) {
                    target.parentElement.appendChild(bulletImage)

                    bulletAnimate(bulletImage, 1.5, 'filter: saturate(1.5) hue-rotate(180deg); ', true)

                    setTimeout(() => {
                        window.requestAnimationFrame(spawnBullet)
                    }, 2500);
                }
            }
            spawnBullet()
        }
    }
    peaShooter(event) {
        if (event.target.dataset.firstLoad == 'true') {
            event.target.dataset.firstLoad = false

            const target = event.target
            const bulletAnimate = this.bulletMoveAnimation

            function spawnBullet() {
                const bulletImage = document.createElement('img')
                bulletImage.width = 30
                bulletImage.height = 30
                bulletImage.style.position = 'absolute'
                bulletImage.src = "../Sprites/General/Pea.png"
                bulletImage.style.left = target.offsetLeft + target.offsetWidth + 'px'

                if (target.parentNode) {
                    target.parentElement.appendChild(bulletImage)

                    bulletAnimate(bulletImage, 2, 'filter: grayscale(100%) sepia(1) hue-rotate(-50deg) saturate(5);')

                    setTimeout(() => {
                        window.requestAnimationFrame(spawnBullet)
                    }, 2500);
                }
            }
            spawnBullet()
        }
    }
    sunFlower(event) {
        if (event.target.dataset.firstLoad == 'true') {
            event.target.dataset.firstLoad = false

            const target = event.target
            const sun = this.sun

            function summonSun() {
                if (target.parentNode) {

                    sun.summonNearSunFlower(target)

                    setTimeout(() => {
                        window.requestAnimationFrame(summonSun)
                    }, 10000);
                }
            }
            summonSun()
        }
    }



    bulletMoveAnimation(bullet, damage, effectStyle, slowEffect = false) {
        let pos = bullet.offsetLeft
        function animate() {
            if (document.body.dataset.gameRun == 'true') {

                const bulletRect = bullet.getBoundingClientRect()
                const bellowBullet = (document.elementFromPoint(bulletRect.left, bulletRect.top));

                pos = pos + 4
                bullet.style.left = pos + 'px'


                if (bellowBullet.classList.contains('zombie')) {
                    bellowBullet.dataset.health = parseFloat(bellowBullet.dataset.health) - damage
                    if (slowEffect) { bellowBullet.dataset.slow = slowEffect }
                    const oriStyle = bellowBullet.getAttribute('style')
                    bellowBullet.setAttribute('style', oriStyle + effectStyle)
                }

                if (bullet.offsetLeft >= 700 || bellowBullet.classList.contains('zombie')) {
                    bullet.remove()
                }
            }
            if (bullet.parentNode) {
                window.requestAnimationFrame(animate)
            }
        }
        animate()
    }
}