import { Suspense } from "react";
import Similars from "../../../../../components/movie-simliar";

interface IParams {
    params: { id: string };
}

export const metadata = {
    title: "Similar"
}

export default async function SimilarPage({params: {id}}: IParams) {
    return (
        <>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <Similars id={id}/>
            </Suspense>
        </>
    );
}