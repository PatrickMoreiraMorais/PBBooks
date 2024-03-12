import { useEffect, useState } from "react";
import BookList from "../../components/BookList";
import style from "./BooksListPage.module.css";
export default function BookListPage() {
  const [arrayBooks, setArrayBooks] = useState([]);
  const [state, setState] = useState("");

  async function request() {
    try {
      const response = await fetch(
        "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json",
      );
      if (response.ok) {
        const data = await response.json();
        const books = Object.values(data);
        setArrayBooks(books);
        console.log(books);
      } else {
        console.error("A requisição não ocorreu corretamente");
      }
    } catch (error) {
      console.error("Ocorreu um erro na requisição:", error);
    }
  }

  useEffect(() => {
    request();
  }, []);

  const filterBooksList = arrayBooks.filter(
    (book) =>
      book.genre.toLowerCase().includes(state.toLowerCase()) ||
      book.author.toLowerCase().includes(state.toLowerCase()) ||
      book.title.toLowerCase().includes(state.toLowerCase()),
  );
  return (
    <div className={style.body}>
      <div className={style.containerInput}>
        <input
          type="text"
          onChange={(event) => setState(event.target.value)}
          placeholder="Pesquise um livro ou Autor"
          className={style.inputStyle}
        />
        <select
          name="FilterGenre"
          value={state}
          onChange={(event) => setState(event.target.value)}
          className={style.selectStyle}
        >
          <option value="">Escolha um Gênero</option>
          <option value="Ficção Distópica">Ficção Distópica</option>
          <option value="Realismo mágico">Realismo Mágico</option>
          <option value="Romance clássico"> Romance Clássico </option>
          <option value="Fantasia">Fantasia</option>
          <option value="Alegoria Política">Alegoria Política</option>
          <option value="Suspense">Suspense</option>
          <option value="Ficção Clássica">Ficção Clássica</option>
          <option value="Ficção de Crescimento">Ficção de Crescimento</option>
          <option value="Ficção Filosófica">Ficção Filosófica</option>
        </select>
      </div>
      <div className={style.conteinerFlex}>
        <BookList books={filterBooksList} />
      </div>
    </div>
  );
}
