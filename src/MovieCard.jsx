import styles from "./MovieCard.module.css"

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <li className={styles.movieCard}>
            <img             
                height= {345}
                width= {230}
                src={imageUrl} 
                alt={movie.title} 
                className={styles.movieImage}/>
            <div>{movie.title}</div>
        </li>
    );
}