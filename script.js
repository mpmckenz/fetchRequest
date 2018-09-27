const fetchResults1 = document.getElementById("fetchResults")

function jeopardyContainer1(clues) {
    let categoryHeader = document.createElement("h3")
    let container = document.createElement("div")
    let categoryNode = document.createTextNode(clues.Category)
    let clueNode = document.createTextNode(clues.Clue)
    let answerNode = document.createTextNode(clues.Answer)
    categoryHeader.appendChild(categoryNode)
    container.appendChild(categoryHeader)
    container.appendChild(clueNode)
    container.appendChild(answerNode)
    fetchResults1.appendChild(container)
}

fetch("http://jservice.io/api/category?id=1079")
    .then(promisedResponse => promisedResponse.json())
    .then(payload => {
        let categoryTitle = payload.title
        let randomClue = payload.clues[Math.floor(Math.random() * 
            payload.clues.length)]
        let randomAnswer = payload.clues


        const aroundTheWorld1 = {
            Category: "Category: " + categoryTitle,
            Clue: "Clue: " + randomClue.question,
            Answer: " Answer: " + randomAnswer.answer
        }

        jeopardyContainer1(aroundTheWorld1)
        console.log(randomAnswer)
    })


fetch("http://jservice.io/api/category?id=1079")
    .then(promisedResponse => promisedResponse.json())
    .then(hydratedClue => console.log(hydratedClue))