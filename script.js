const fetchResults1 = document.getElementById("fetchResults")

function jeopardyContainer(clues) {
    let categoryHeader = document.createElement("h3")
    let container = document.createElement("div")
    let categoryNode = document.createTextNode(clues.Category)
    let clueNode = document.createTextNode(clues.Clue)
    // let answerNode = document.createTextNode(clues.Answer)
    categoryHeader.appendChild(categoryNode)
    container.appendChild(categoryHeader)
    container.appendChild(clueNode)
    // container.appendChild(answerNode)
    fetchResults1.appendChild(container)
}

fetch("http://jservice.io/api/category?id=1079")
    .then(hydrateWorldClue => hydrateWorldClue.json())
    .then(worldPayload => {
        let categoryWorldTitle = worldPayload.title
        let randomWorldClue = worldPayload.clues[Math.floor(Math.random() * worldPayload.clues.length)]
        // let randomWorldAnswer = worldPayload.clues

        const aroundTheWorld = {
            Category: "Category: " + categoryWorldTitle,
            Clue: "Clue: " + randomWorldClue.question,
            // Answer: " Answer: " + randomWorldAnswer.answer
        }

        jeopardyContainer(aroundTheWorld)
    })


async function fruitRandomClue () {
            const fruitFetch = await fetch("http://jservice.io/api/category?id=777")
            const hydrateFruit = await fruitFetch.json()

            let categoryFruitTitle = hydrateFruit.title
            let randomFruitClue = hydrateFruit.clues[Math.floor(Math.random() * hydrateFruit.clues.length)]

            const fruitAndVegetables = {
                Category: "Category: " + categoryFruitTitle,
                Clue: "Clue: " + randomFruitClue.question
            }

            jeopardyContainer (fruitAndVegetables)
            console.log(fruitAndVegetables)
        }
        fruitRandomClue()


// console.log(fruitHydrated)
        // .then(fruitPayload => {
        //     this.categoryTitle = fruitPayload.title
        //     this.randomFruitClue = fruitPayload.clues
        // })

// fetch("http://jservice.io/api/category?id=777")
//     .then(promisedResponse1 => promisedResponse1.json())
//     .then(hydratedClue1 => console.log(hydratedClue1))