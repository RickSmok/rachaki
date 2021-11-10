// select .jogos-box from document
const jogos = document.querySelector('.jogos')
console.log(jogos)

const buttonCreateMatch = document.querySelector('#create-match')

buttonCreateMatch.addEventListener('click', function (event) {
  event.preventDefault()

  // create 'jogo' element to insert in jogos-box
  const jogo = document.createElement('div')
  jogo.classList.add('jogo')

  // title of the game
  const gameName = document.createElement('span')
  gameName.classList.add('game-name')

  // category of the game
  const gameCategory = document.createElement('span')
  gameCategory.classList.add('game-category', 'game-props')
  // prop of the category
  const propCategory = document.createElement('span')
  propCategory.classList.add('prop-name')
  propCategory.innerHTML = 'Esporte'
  gameCategory.appendChild(propCategory)

  // quantity of players
  const gameQuantity = document.createElement('span')
  gameQuantity.classList.add('game-quantity', 'game-props')
  // prop of the quantity
  const propQuantity = document.createElement('span')
  propQuantity.classList.add('prop-name')
  propQuantity.innerHTML = 'Pessoas'
  gameQuantity.appendChild(propQuantity)

  // data of the game
  const gameDate = document.createElement('span')
  gameDate.classList.add('game-date', 'game-props')
  // prop of the date
  const propDate = document.createElement('span')
  propDate.classList.add('prop-name')
  propDate.innerHTML = 'Data e Hora'
  gameDate.appendChild(propDate)

  // adress of the game
  const gameAdress = document.createElement('span')
  gameAdress.classList.add('game-adress', 'game-props')
  // prop of the adress
  const propAdress = document.createElement('span')
  propAdress.classList.add('prop-name')
  propAdress.innerHTML = 'Endereço'
  gameAdress.appendChild(propAdress)

  // create 'button' element to insert in jogo
  const gameButton = document.createElement('button')
  gameButton.classList.add('game-button')
  gameButton.innerHTML = 'Entrar'

  // add gameName, gameCategory, gameQuantity, gameDate, gameAdress, gameButton to jogo
  jogo.appendChild(gameName)
  jogo.appendChild(gameCategory)
  jogo.appendChild(gameQuantity)
  jogo.appendChild(gameDate)
  jogo.appendChild(gameAdress)
  jogo.appendChild(gameButton)

  // add jogo to jogos-box
  jogos.appendChild(jogo)
  console.log(jogo)
})
