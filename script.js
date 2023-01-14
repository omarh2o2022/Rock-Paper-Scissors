const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '🤚',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]

selectionButtons.forEach( selectionButton => {
selectionButton.addEventListener('click', e => {
 const selectionName = selectionButton.dataset.selection
 const selection = SELECTIONS.find(selection => selection.name === selectionName)
 makeSelection(selection)
})
}
)



function makeSelection(selection){
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)
  
  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

for (let i = 0; i < 5; i++) {
  
}

function incrementScore(scoreSpan){
  scoreSpan.innerText =parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winnner){
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winnner) div.classList.add('rwinner')
finalColumn.after(div)
}

function isWinner(selection, opponentSelection){
  return selection.beats === opponentSelection.name
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

