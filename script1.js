const fetchResults1 = document.getElementById("fetchResults")

function jeopardyContainer1(clues) {
    let categoryHeader = document.createElement("h3")
    let container = document.createElement("div")
    let categoryNode = document.createTextNode(clues.Category)
    let clueNode = document.createTextNode(clues.Clue)
    categoryHeader.appendChild(categoryNode)
    container.appendChild(categoryHeader)
    container.appendChild(clueNode)
    fetchResults1.appendChild(container)
}

fetch("http://jservice.io/api/category?id=1079")
    .then(promisedResponse => promisedResponse.json())
    .then(payload => {
        let categoryTitle = payload.title
        let randomClue = payload.clues[Math.floor(Math.random() * 
            payload.clues.length)]


        const aroundTheWorld1 = {
            Category: "Category: " + categoryTitle,
            Clue: "Clue: " + randomClue.question,
        }

        jeopardyContainer1(aroundTheWorld1)
    })


fetch("http://jservice.io/api/category?id=1079")
    .then(promisedResponse => promisedResponse.json())
    .then(hydratedClue => console.log(hydratedClue))