import Link from "next/link";
import styles from "../styles/providers.module.css"

import { API_URL } from "../app/constants";
import { getMovie } from "./movie-info";

export async function getProviders(id:string) {
    const response = await fetch(`${API_URL}/${id}/providers`);
    return response.json();
}

export default async function Providers({id}: {id:string}){
    const provider = await getProviders(id);
    const movie = await getMovie(id);
    const providerKR = provider.KR;
    const providerPlatForm = (providerKR?.rent ? providerKR.rent : providerKR?.flatrate && providerKR.flatrate)

    return(
        <div className={styles.container}>
            <div>
                <img src={movie.poster_path} alt="" />
            </div>
            {providerKR ?
                <>
                    <h1>Introducing Link : <Link href={providerKR.link}>{providerKR.link}</Link></h1>
                    <div>
                        <h2>PlatForm</h2>
                        <div className={styles.platform}>
                            {providerPlatForm.map((rent, idx) => (
                                <div key={idx}>
                                    <img src={rent.logo_path} alt="" />
                                    <p>{rent.provider_name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                :
                <div className={styles.nodata}>You can't see any PlatForm</div>
            }
        </div>
    )
}