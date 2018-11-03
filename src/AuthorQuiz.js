import React from "react";
import "./AuthorQuiz.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the Author</p>
      </div>
    </div>
  );
}

function Book({title}) {
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  )
}

function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="author-image" alt="Author" width="310" height="335" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div />;
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credited">
          All images are from
          <a href="https://commons.wikimedia.org/wiki/Main_Page">
            Wikimedia Commans
          </a>
          and are in public domain
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({turnData}) {
    return (
      <div className="container-fluid">
        <Hero /> <Turn {...turnData} /> <Continue /> <Footer />
      </div>
    );
}

export default AuthorQuiz;
