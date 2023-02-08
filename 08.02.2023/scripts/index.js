import {getRandomQuote} from './api.js'

const quote = document.querySelector('.quote');
const quoteText = quote.querySelector('.quote__text');
const quoteAuthor = quote.querySelector('.quote__author');
const quoteLink = quote.querySelector('.quote__link');
const nextQuoteButton = document.querySelector('.quote-next');

const showQuote = () => {
  getRandomQuote()
    .then((data) => {
      quoteText.textContent = data.quoteText;
      quoteAuthor.textContent = data.quoteAuthor || 'Автор неизвестен';
      quoteLink.textContent = data.quoteLink;
      quoteLink.href = data.quoteLink;
      console.log(data)
    })
    .catch((err) => {
      quoteText.textContent = 'Ошибка при загрузке';
      quoteAuthor.textContent = '';
      quoteLink.textContent = '';
      console.log(err)
    })
}

nextQuoteButton.addEventListener('click', showQuote)
showQuote();
