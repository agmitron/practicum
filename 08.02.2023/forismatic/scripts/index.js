import {getRandomQuote} from './api.js'

const quote = document.querySelector('.quote');
const quoteText = quote.querySelector('.quote__text');
const quoteAuthor = quote.querySelector('.quote__author');
const quoteLink = quote.querySelector('.quote__link');
const nextQuoteButton = document.querySelector('.quote-next');

const showQuote = () => {
  getRandomQuote().then(res => res.text()).then(text => console.log(text))
}

nextQuoteButton.addEventListener('click', showQuote)
showQuote();
