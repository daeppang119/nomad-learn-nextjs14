import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

async function getMovies(): Promise<Movie[]> {
  // await new Promise(resolve => setTimeout(resolve, 5000));

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("영화 목록을 불러오는 데 실패했습니다");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("영화 목록을 불러오는 중 에러 발생:", error);
    return [];
  }
}

export default async function HomePage() {
  const movies = await getMovies();
  // console.log(movies);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
