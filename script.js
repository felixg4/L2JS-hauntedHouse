const container = document.getElementById('hud-grid') ?? document.createElement('div')
container.id = 'hud-grid'
const sites = {
    //first floor
    "Hallway 1": {
        options: [
            'Enter the mysterious door', 'Hallway2.html'
        ],
        image: "f1-hallway1.png",
        story: 'You see light shining out of a crack.'
    },
    "Hallway 2": {
        options: [
            'Open the mysterious door', 'main.html',
            'Go up into the second floor', '../Second Floor/main.html',
            'Go down into the basement', '../Basement/main.html'
        ],
        image: "up-down-middle.png",
        story: 'The lightbulb creates a humming sound.'
    },
    "First Floor Main Room":{
        options: [
            'Open the closet', 'Closet.html',
            'Use the bathroom', "Bathroom X.html",
            'Grab some grub in the dining room', 'Dining Room.html',
            'Go back to the hallway', 'Hallway2.html'
        ],
        image: "f1-hallway2.png",
        story: ''
    },
    "Closet": {
        options: [
            'Open the closet', 'Closet.html',
            'Use the bathroom', "/First Floor/Bathroom X.html",
            'Grab some grub in the dining room', 'Dining Room.html',
            'Go back to the hallway', 'Hallway2.html'
        ],
        image: "f1-hallway2.png",
        story: 'It\'s locked.'
    },
    "Some Bathroom": {
        options: [
            'Go back into the main room', 'main.html'
        ],
        image: "f1-bathroom.png",
        story: 'Seems like the toilet is in use.'
    },
    "Dining Room": {
        options: [
            'Go back into the main room', 'main.html',
            'Give the chef your thanks in the kitchen', 'Kitchen.html',
            'Chill in the living room', 'Living Room.html'
        ],
        image: "DKL.png",
        story: 'The smell of cheese fills up the room. You get hungry and take a bite out of the cheese.'
    },
    "Living Room": {
        options:
            [
                'Go back to the dining room', 'Dining Room.html'
            ],
        image: "living room.png",
        story: 'You have opened the door and stepped in. You are greeted by a scary witch.'
    },
    "Kitchen": {
        options: [
            'Go back into the dining room', 'Dining Room.html'
        ],
        image: "Kitchen.png",
        story: 'You encounter a pumpkin chef. You tell him his cheese was good.'
    },
    //basement
    // the thing in quotes has to be the page's actual title from the title tag
    "Basement Main Room": {
        options:
        [
           'Go back up to the first floor', '../First Floor/Hallway2.html' ,
           'Play some games in the game room', 'Game Room.html' ,
           'Lift some weights in the gym', 'Gym.html',
           'Watch a movie in the theater', 'Theater.html',
           'Wash your clothes in the laundry room', 'Laundry Room.html'
        ],
        image: 'basement-hallway.png',
        story: ''
    },
    "Game Room": {
        options: [
            'Go back to the main room', 'main.html'
        ],
        image: "Game room.png",
        story: 'You encounter a frog immersed in an action packed video game.'
    },
    "Gym": {
        options: [
            'Go back to the main room', 'main.html'
        ],
        image: "Gym.png",
        story: 'You attempt to lift some weights, but you fail miserably. The cat poster does not give you motivation.'
    },
    "Theater": {
        options: [
            'Go back to the main room', 'main.html'
        ],
        image: "theater.png",
        story: 'You encounter a duck watching a terrifying movie.'
    },
    "Laundry Room": {
        options: [
            'Go back to the main room', 'main.html'
        ],
        image: "laundry-room.png",
        story: 'You encounter a dachshund stuck in the washing machine.'
    },
    //second floor
    "Second Floor Main Room":{
        options: [
            'Go back down to the first floor', '../First Floor/Hallway2.html',
            'Water the plants in the greenhouse', 'Greenhouse.html',
            'Use the bathroom', 'BathroomX.html',
            'Take a nap in the master bedroom', 'Master Bedroom.html',
            'Feel the breeze on the balcony', 'Balcony.html'
        ],
        image: "second-floor.png",
        story: ''
    },
    "Greenhouse":{
        options: [
            'Go back to the main room', 'main.html',
            'Pick up your ball', 'Win.html'
        ],
        image: "Greenhouse.png",
        story: 'As you admire the plants, you catch a glimpse of a familiar red ball'
    },
    "Greenhouse":{
        options: [
            'Go back to the main room', 'main.html',
            'Pick up your ball', 'Win.html'
        ],
        image: "Greenhouse.png",
        story: 'As you admire the plants, you catch a glimpse of a familiar red ball'
    },
    "Bathroom":{
        options: [
            'Go back down to the first floor', '../First Floor/Hallway2.html',
            'Water the plants in the greenhouse', 'Greenhouse.html',
            'Use the bathroom', 'BathroomX.html',
            'Take a nap in the master bedroom', 'Master Bedroom.html',
            'Feel the breeze on the balcony', 'Balcony.html'
        ],
        image: "second-floor.png",
        story: 'Occupied! Looks like you need to use the one on the first floor.'
    },
    "Master Bedroom":{
        options: [
            'Go back to the main room', 'main.html',
        ],
        image: "bedroom.png",
        story: 'You jump onto the soft king-sized bed. It feels like heaven.'
    },
    "Balcony":{
        options: [
            'Go back to the main room', 'main.html',
        ],
        image: "balcony.png",
        story: 'You enjoy the nice breeze as you appreciate the view.'
    },
    //End
    "End":{
        options: [
            'Play Again', '../Beginning.html'
        ],
        image: "End.png",
        story:'You found the ball! You have achieved your goal, and you exit the mansion.'
    }
}
const options = document.querySelector('ul')
const optionContainer = options?.childElementCount > 0 ? options : document.createElement('span')
optionContainer.id = 'option-selector'
if (optionContainer.childElementCount == 0) {
    const optionList = document.createElement('ul')
    for (let i = 0; i < sites[document.title].options.length; i += 2) {
        const optionItem = document.createElement('li')
        const optionLink = document.createElement('a')
        optionLink.href = sites[document.title].options[i + 1]
        optionLink.textContent = sites[document.title].options[i]
        optionItem.appendChild(optionLink)
        optionList.appendChild(optionItem)
    }
    optionContainer.appendChild(optionList)
}

if (!document.cookie) document.cookie = 'hist='
if (!window.location.toString().endsWith('Beginning.html')) {
    if (document.title.length > 0 && !document.cookie.endsWith(document.title + "-")) document.cookie += `${document.title}-`
}
let histBox = document.getElementById('history-box')
if (!histBox) {
    histBox = document.createElement('span')
    histBox.id = 'history-box'
    for (const page of document.cookie.substring(5).split('-', document.cookie.split('-').length - 1)) {
        console.log(page)
        histBox.textContent += sites[page]?.story + "\n"
    }
}

let scene = document.getElementById('scene')
if (!scene) {
    scene = document.createElement('img')
    scene.id = 'scene'
}
scene.src = `../images/${sites[document.title].image}`

let inventory = document.getElementById('inventory-display')=
container.appendChild(optionContainer)
container.appendChild(scene)=
container.appendChild(histBox)
document.body.appendChild(container)
if (document.querySelector('footer')) document.body.appendChild(document.querySelector('footer'))