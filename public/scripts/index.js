// select .jogos-box from document
const jogosBox = document.querySelector('.jogos-box')
console.log(jogosBox)

const buttonCreateMatch = document.querySelector('#create-match')

buttonCreateMatch.addEventListener('click', function (event) {
  event.preventDefault()

  // create 'jogo' element to insert in jogos-box
  const jogo = document.createElement('div')
  jogo.classList.add('jogo')

  const gameName = document.createElement('span')
  gameName.classList.add('game-name')

  const gameCategory = document.createElement('span')
  gameCategory.classList.add('game-category', 'game-props')

  const gameQuantity = document.createElement('span')
  gameQuantity.classList.add('game-quantity', 'game-props')

  const gameDate = document.createElement('span')
  gameDate.classList.add('game-date', 'game-props')

  const gameAdress = document.createElement('span')
  gameAdress.classList.add('game-adress', 'game-props')

  const gameButton = document.createElement('button')
  gameButton.classList.add('game-button')

  // const propName = document.createElement('span')
  // propName.classList.add('props-name').innerText = 'Esporte'

  // gameCategory.appendChild(propName)
  // gameQuantity.appendChild(propName)
  // gameDate.appendChild(propName)
  // gameAdress.appendChild(propName)

  // add gameName, gameCategory, gameQuantity, gameDate, gameAdress, gameButton to jogo
  jogo.appendChild(gameName)
  jogo.appendChild(gameCategory)
  jogo.appendChild(gameQuantity)
  jogo.appendChild(gameDate)
  jogo.appendChild(gameAdress)
  jogo.appendChild(gameButton)

  // add jogo to jogos-box
  jogosBox.appendChild(jogo)
  console.log(jogo)
})
