import { Suspense } from "react";
import Credits from "../../../../../components/movie-credits";

interface IParams {
    params: { id: string };
}

export const metadata = {
    title: "Credits"
}

export default async function CreditsPage({params: {id}}: IParams) {
    return (
        <>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <Credits id={id}/>
            </Suspense>
        </>
    );
}