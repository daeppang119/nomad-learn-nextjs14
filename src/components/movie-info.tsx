import { API_URL } from "@/app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  const respones = await fetch(`${API_URL}/${id}`);
  return respones.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
