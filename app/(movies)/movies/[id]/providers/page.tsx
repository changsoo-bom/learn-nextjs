import { Suspense } from "react";
import Providers from "../../../../../components/movie-provider";

interface IParams {
    params: { id: string };
}

export const metadata = {
    title: "Providers"
}

export default async function ProvidersPage({params: {id}}: IParams) {
    return (
        <>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <Providers id={id}/>
            </Suspense>
        </>
    );
}