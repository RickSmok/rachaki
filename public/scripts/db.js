const db = openDatabase('local.db.sqlite', '1.0', 'Banco', 2 * 1024 * 1024)
const gameButton = document.querySelector('#game-button')
console.log(gameButton)

gameButton.addEventListener('click', save)

function save(event) {
  event.preventDefault()
  const gameName = document.querySelector('#game-name').value
  const gameCategory = document.querySelector('#game-category').value
  const gameQuantity = document.querySelector('#game-quantity').value
  const gameDate = document.querySelector('#game-date').value
  const gameHour = document.querySelector('#game-hour').value
  const gameUrl = document.querySelector('#game-url').value
  const gameAdress = document.querySelector('#game-adress').value

  db.transaction(function (armazenar) {
    armazenar.executeSql(
      `INSERT INTO PARTIDAS (nome, tipo, quantidade, data, hora, link, end) VALUES (${gameName}, ${gameCategory}, ${gameQuantity}, ${gameDate}, ${gameHour}, ${gameUrl}, ${gameAdress})`
    )
  })
}
