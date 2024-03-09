import { API_URL } from "@/app/(home)/page";

async function getMovie(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const respones = await fetch(`${API_URL}/${id}`);
  return respones.json();
}

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const respones = await fetch(`${API_URL}/${id}/videos`);
  return respones.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videose] = await Promise.all([getMovie(id), getVideos(id)]);
  return <div>{movie.title}</div>;
}
