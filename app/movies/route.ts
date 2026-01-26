// export async function GET() {
//   return new Response("Hello World");
// }

import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

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
