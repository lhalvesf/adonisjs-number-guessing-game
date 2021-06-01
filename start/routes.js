const Route = use('Route')

Route.get('/', ({ request }) => {

  /* get number from url string */
  const guessedNumber = Number(request.input('number'))

  /* if number isnt specified, inform user about it */
  if (!guessedNumber) {
    return 'Please specify a number passing ?number={number} to the url'
  }

  /* generate a ramdom number */
  const randomNumber = Math.floor(Math.random() * 20) + 1

  /* check if numbers match */
  return guessedNumber === randomNumber
  ? 'Matched'
  : `Match failed. The random number is ${randomNumber}`

})