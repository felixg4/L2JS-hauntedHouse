const scene = document.getElementById('scene')
const pageNames = ["Living Room"]
const imageNames = ["living room.png"]
scene.src = `../images/${imageNames[pageNames.findIndex(p => p == document.title)]}`