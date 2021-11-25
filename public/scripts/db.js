const form = document.querySelector('#game-form')
const gameButton = form.querySelector('#game-button')
const gameName = form.querySelector('#game-name')
const gameCategory = form.querySelector('#game-category')
const gameQuantity = form.querySelector('#game-quantity')
const gameData = form.querySelector('#game-data')
const gameHour = form.querySelector('#game-hour')
const gameUrl = form.querySelector('#game-url')
const gameAdress = form.querySelector('#game-adress')

function generateId() {
  let i
  localStorage.getItem('@rachaki/id')
    ? (i = parseInt(localStorage.getItem('@rachaki/id')) + 1)
    : (i = 1)
  localStorage.setItem('@rachaki/id', i)
  return i
}

gameButton.addEventListener('click', event => {
  event.preventDefault()
  gameObject = {
    id: generateId(),
    name: gameName.value,
    category: gameCategory.value,
    quantity: gameQuantity.value,
    data: gameData.value,
    hour: gameHour.value,
    url: gameUrl.value,
    adress: gameAdress.value
  }
  localStorage.setItem(
    `@rachaki/jogo${gameObject.id}`,
    JSON.stringify(gameObject)
  )
  gameName.value = ''
  gameCategory.value = ''
  gameQuantity.value = ''
  gameData.value = ''
  gameHour.value = ''
  gameUrl.value = ''
  gameAdress.value = ''

  alert('Jogo cadastrado com sucesso!')
})
