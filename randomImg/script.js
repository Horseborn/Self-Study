const container = document.querySelector('.container')
const webURL = 'https://source.unsplash.com/random/'
const rows = 15;

for (let i = 0; i < rows * 4; i++){
const img = document.createElement('img')
img.src = `${webURL}${getRandSiz()}`
container.appendChild(img)
}

function getRandSiz(){
    return `${getRandNr()}x${getRandNr()}`
}

function getRandNr(){
    return Math.floor(Math.random() * 15) + 300
}