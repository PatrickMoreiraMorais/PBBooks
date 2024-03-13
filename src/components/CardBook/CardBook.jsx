import style from './CardBook.module.css'
export default function CardBook(props) {
  return(
    <div className={style.card} data-cy='cardBooks' >
       <h2 className={style.title}>{props.title}</h2>
      <img src={props.image} alt={props.title} className={style.img}/>
      <div>
        <p className={style.autor}>Autor: {props.author}</p>
        <p className={style.genre}>{props.genre}</p>
      </div>
    </div>
  );
}