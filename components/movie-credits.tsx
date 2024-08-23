import styles from "../styles/credits.module.css";
import { API_URL } from "../app/constants";

export async function getCredits(id:string){
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function Credits({id}: {id:string}) {
    const credits = await getCredits(id);

    return (
        <>
            <h1 className={styles.name}>credits</h1>
            <div className={styles.container}>
                {credits.map(credit => (
                    <div className={styles.profilebox} key={credit.id}>
                        {credit.profile_path ? (
                            <img src={credit.profile_path} alt={credit.name} />
                        ) : (
                            <div className={styles.noimg}>No Image</div>
                        )}
                        <div className={styles.info}>
                            <h1>{credit.character}</h1>
                            <div>
                                <h3>{credit.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}