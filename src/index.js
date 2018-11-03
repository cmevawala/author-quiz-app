import React from 'react';
import ReactDOM from 'react-dom';
import * as _ from 'underscore';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [{
        name: 'Mark Twain',
        imageUrl: 'images/authors/mark-twain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississipi', 'Roughing it']
    },
    {
        name: 'J. K. Rowling',
        imageUrl: 'images/authors/j-k-rowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Harry Porter']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephen-king.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Shinning', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charles-dickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David CopperField', 'A tale of two cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/william-shakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData() {
    const allBooks = authors.reduce((p, c, i) => {
        return p.concat(c.books);
    }, []);

    const fourRandomBooks = _.shuffle(allBooks).slice(0, 4);
    const answer = _.sample(fourRandomBooks);
    return {
        books: fourRandomBooks,
        author: authors.find((author) => author.books.some((title) => title === answer))
    }
}

const state = {
    turnData: getTurnData(authors)
}

ReactDOM.render( < AuthorQuiz { ...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();