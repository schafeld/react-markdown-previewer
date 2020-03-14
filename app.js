const QUOTES = window.DATA_QUOTES["quotes"];
const QUOTES_TOTAL = window.DATA_QUOTES["quotes"].length;
// console.log("The second quote is '" + QUOTES[1].quote + "' by " + QUOTES[1].author + ".");

// (function () {
// 'use strict';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            randomNumber: 0,
            liked: false,
            author: 'n/a',
            quote: 'n/a'
            };
        }

        getRandomQuote() {
            this.setState({
                randomNumber: Math.floor(Math.random() * QUOTES_TOTAL),
                quote: QUOTES[this.state.randomNumber].quote,
                author: QUOTES[this.state.randomNumber].author
            });

            console.log("The quote number " + (this.state.randomNumber +1) + " is '" + QUOTES[this.state.randomNumber].quote + "' by " + QUOTES[this.state.randomNumber].author + ".");
        }

        render() {
            if (this.state.liked) {
            return 'You liked this.';
            }

            // this.getRandomQuote();

            return (
            <div id="quote-box">
                <div id="text">
                    {this.state.quote}
                </div>
                <div id="author">
                    {this.state.author}
                </div>
                <TweetQuote quote={this.state.quote} author={this.state.author} />
                <button onClick={() => {this.getRandomQuote()}} className="button" id="new-quote">New quote</button>
                <a className="button" id="like-quote">Like quote</a>
                <button onClick={() => this.setState({ liked: true })}>
                <SimpleIcon /> Like
                </button>
            </div>
            );
        }
    }

    let domContainer = document.querySelector('#app');
    ReactDOM.render(<App />, domContainer);

    function SimpleIcon () {
    return (
        <em> 
        -X- 
        </em>
    );
    }

    function TweetQuote (props) {
    return (
        // <a href={props.quote} className="button" id="tweet-quote">Tweet quote</a>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.quote + '" ' + props.author)} className="button" id="tweet-quote">Tweet quote</a>
    );
    }

// }());

function displayFirstRandomQuote () {
    // TODO: Refactor this, so state is defined after initial load already
    const RANDOM_QUOTE_NUMBER = Math.floor(Math.random() * QUOTES_TOTAL);
    document.getElementById('text').innerText = QUOTES[RANDOM_QUOTE_NUMBER].quote;
    document.getElementById('author').innerText = QUOTES[RANDOM_QUOTE_NUMBER].author; 
}

displayFirstRandomQuote();
