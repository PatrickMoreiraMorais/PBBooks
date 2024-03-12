import CardBook from './CardBook/CardBook';
export default function BookList({books}) {
  const arrayMaped = books.map((book) => {
    return(
      <CardBook title={book.title} author={book.author} image={book.cover} genre={book.genre}/>
    )
  })
  return arrayMaped;
}