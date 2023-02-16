export const getRandomQuote = () => {
  return fetch(`https://api.forismatic.com/api/1.0?method=getQuote&key=457653&format=text&lang=ru`)
}