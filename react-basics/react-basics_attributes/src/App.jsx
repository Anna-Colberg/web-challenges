import "./styles.css";

function Article() {
  return (
  <article className="article-link"><a href="https://de.wikipedia.org/wiki/Haushund"className="article__link">Der Haushund</a>
    <h2 className="article__title">Article</h2>
    <label htmlFor="article__test">Hello</label>
    <input type="text" id="article" htmlFor/>Der Hund ist der Beste Freund eines Menschen</article>
  );
}

export default function App() {
  return <Article/>;
}