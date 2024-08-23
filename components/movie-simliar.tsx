
import styles from "../styles/similars.module.css"
import { API_URL } from "../app/constants";

export async function getSimilars(id:string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function Similars({id}: {id:string}) {
    const similar = await getSimilars(id);
    return(
        <div>
            <h1 className={styles.title}>similar movies</h1>
            <div className={styles.container}>
                {similar.map(similar => (
                    <div key={similar.id} className={styles.movie}>
                        <img src={similar.poster_path} alt="" />
                        <h1>{similar.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}