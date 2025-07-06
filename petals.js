const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");

const API_URL = 'https://api.realinspire.live/v1/quotes/random';

const getQuote = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const quote = data[0].content;
    const author = data[0].author || 'Unknown';

    quoteEl.textContent = quote;
    authorEl.textContent = author;
  } catch (error) {
    console.log(error);
    quoteEl.textContent = 'Oops! Something went wrong.';
    authorEl.textContent = '';
  }
}

const newQuoteBtn = document.querySelector(".newquote")

getQuote();

newQuoteBtn.addEventListener('click', getQuote);

//https://dog.ceo/api/breeds/image/random
const dogEl = document.querySelector(".dogimg");

tracker = 0;
list = [];

const getImg = async () => {
  try {
    if (tracker === 0) {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      const response1 = await fetch('https://randomfox.ca/floof/?ref=apilist.fun');
      const data1 = await response1.json();
      const response2 = await fetch('https://api.thecatapi.com/v1/images/search');
      const data2 = await response2.json();

      list.push(data.message)
      list.push(data1.image)
      list.push(data2[0].url)
      console.log(list)
      img = list[0]
      tracker++
    }
    else if (tracker === 1) {
      img = list[1]
      tracker++
    }
    else if (tracker === 2) {
      img = list[2]
      tracker = 0
      list.splice(0, list.length);
    }
    
    dogEl.src = img;

  } catch (error) {
    console.log(error);
    dogEl.src = "images/dog.png"
  }
}

const newDogButton = document.querySelector(".newimg")

getImg();

newDogButton.addEventListener('click', getImg);