class Shovel {
    constructor() {
        this.displayShovel = document.getElementById('shovel')

        const styleShovelSelected = `
            .board > *:hover {
                /* border: 2px solid red; */
                background-color: rgba(255, 0, 0, 0.445);
            }
            #shovel {
                background-color: rgba(255, 0, 0, 0.548);
            }
        `


        this.displayShovel.addEventListener('click', (event) => {
            const styleShovel = document.getElementById('shovel-style')
            if (styleShovel) {
                document.getElementById('shovel-style').remove()
            } else {
                const createStyleShovel = document.createElement('style')
                createStyleShovel.id = 'shovel-style'
                createStyleShovel.innerHTML = styleShovelSelected
                document.head.appendChild(createStyleShovel)
            }
        })

        document.addEventListener('click', (event) => {
            const styleShovel = document.getElementById('shovel-style')
            if (styleShovel) {
                if (event.target.classList.contains('plant')) {
                    event.target.remove()
                }
            }
        })
    }
}