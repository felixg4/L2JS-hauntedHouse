const container = document.getElementById('hud-grid') | document.createElement('div')
container.id = 'hud-grid'
const sites = {
    "Living Room": {
        options:
            [
                'Peek inside the bathroom', 'Bathroom X.html', 
                'Peek inside the closet', 'Closet X.html',
                'Go to the dining room', 'Dining Room.html',
                'See what\'s cooking', 'Kitchen.html'
            ],
        image: "living room.png",
        story: 'you have opened the door and stepped in. you are greeted by a scary witch.'
    }
}
const options = document.querySelector('ul')
const optionContainer = document.createElement('span')
optionContainer.id = 'option-selector'
if (options.childElementCount > 0) optionContainer.appendChild(options)
else {
    const optionList = document.createElement('ul')
    sites[document.title].options.forEach(o => {
        const optionItem = document.createElement('li')
        const optionLink = document.createElement('a')
        [optionItem.textContent, optionLink.href] = o
        optionItem.appendChild(optionLink)
        options.appendChild(optionItem)
    })
    container.appendChild(optionList)
}

let histBox = document.getElementById('history-box')
if (!histBox) {
    histBox = document.createElement('span')
    histBox.textContent = sites[document.title].story
}

let scene = document.getElementById('scene')
if (!scene) {
    scene = document.createElement('img')
    scene.id = 'scene'
}
scene.src = `../images/${sites[document.title].image}`

let inventory = document.getElementById('inventory-display')
if (!inventory) {
    inventory = document.createElement('span')
    inventory.id = 'inventory-display'
}
inventory.textContent = "You have:"
const itemList = document.createElement('ul')
document.cookie.match(/inventory=(.+)/)[1].split(',').map(i => {
    let line = document.createElement('li')
    line.textContent += i
    itemList.appendChild(line)
})
inventory.appendChild(itemList)

container.appendChild(optionContainer)
container.appendChild(histBox)
container.appendChild(scene)
container.appendChild(inventory)
document.body.appendChild(container)
document.body.appendChild(document.querySelector('footer'))