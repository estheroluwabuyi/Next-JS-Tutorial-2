// export async function GET() {
//   return new Response("Hello World");
// }

import { movies } from "./db";
import type { NextRequest } from "next/server.js";

// export async function GET() {
//   return Response.json(movies);
// }

export async function POST(res: Request) {
  const movie = await res.json();
  // the movie posted is called

  // console.log("........................", movie);

  const newMovie = { ...movie };
  // the movie object or objects posted is spread and stored into newMovie

  movies.push(newMovie);
  // our posted movie object or objects is pushed into the movies array.

  return new Response(JSON.stringify(newMovie));
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredMovies = query
    ? movies.filter((m) => m.name.toLowerCase().includes(query))
    : movies;

  return new Response(JSON.stringify(filteredMovies));
}
