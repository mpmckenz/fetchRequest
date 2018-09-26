/* Clues for: Around the World-- http://jservice.io/popular/1079
http://jservice.io/api/category?id=1079
Clues for: Around the World-- http://jservice.io/popular/777
http://jservice.io/api/category?id=777

4. For one of your two categories, write a GET request using fetch() and .then()
 to display the category title and one random clue from this category on the DOM. 
 (5 points)
5. For the other of your two categories, write a GET request using fetch() and 
async/await to display the category title and one random clue from this category
 on the DOM. (5 points) */

// Class Clue {

// constructor () {
    // this.randomClue()
//         .then(clue => {
//             this.category = clue.title
//             this.question = clue.question
//             this.answer = clue.answer
//         })
// }
// }

//     randomClue () {

    // let jeopardyMsg = 
    // `Category: ${categoryTitle}\nQuestion: ${clue.question}`
    // let container = document.createElement("div")
    // let jeopardyNode = document.createTextNode(jeopardyMsg)
    // let clueNode = document.createTextNode(clue)
    // container.appendChild(jeopardyNode)
    // container.appendChild(clueNode)
    // document.body.appendChild(container)
    // console.log(clueNode)



fetch ("http://jservice.io/api/category?id=1079")
    .then(promisedResponse => promisedResponse.json())
    .then(payload => {
        let categoryTitle = payload.title
        let clue = payload.clues[Math.floor(Math.random() * payload.clues.length)]
        let answer

            let Category = document.createElement("h3")
            let question = document.createElement("div")
            let questionNode = document.createTextNode(categoryTitle)
            let clueNode = document.createTextNode(clue)
            // let clueNode = document.createTextNode(clue)
            question.appendChild(questionNode)
            Category.appendChild(clueNode)
            document.body.appendChild(container)
        })


// fetch ("http://jservice.io/api/category?id=1079")
//     .then(promisedResponse => promisedResponse.json())
//     .then(hydratedClue => console.log(hydratedClue))

//     function displayClue (hydratedClue) {
//         clue = hydratedClue

//     }