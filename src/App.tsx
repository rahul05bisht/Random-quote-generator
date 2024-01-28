import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight, FaTumblr } from 'react-icons/fa';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomcolor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red},${green},${blue})`;
};

const transition = "all 1s smooth";
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const [randomColor, setRandomColor] = useState<string>(getRandomcolor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomcolor());
  }

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box" >
        <div className="quote-content" style={{ color: randomColor, transition }}>
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }}></FaQuoteLeft>
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} ></FaQuoteRight>
          </h2>
          <h4 id="author">-{quote.author}</h4>
        </div>
        <div className="buttons">
          <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text =${quote.quote}"} target="_blank" id="tweet-quote"
            style={{ backgroundColor: randomColor, transition }}><FaTwitter color="white"></FaTwitter></a>
          <a href={"https://www.tumblr.com/new/quote/text=${quote.quote}"} target="_blank" id="tumblr"  
            style={{ backgroundColor: randomColor, transition }}>
            <FaTumblr color="white"></FaTumblr>
          </a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor, transition }}>Next Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App;
