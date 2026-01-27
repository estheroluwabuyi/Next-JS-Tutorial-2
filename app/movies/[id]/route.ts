import { movies } from "../db";

export async function GET(
  _res: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  const movie = movies.find((m) => m.id === +id);

  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

// export async function POST(res: Request) {
//   const movie = await res.json();

//   const newMovie = { ...movie };

//   movies.push(newMovie);

//   return new Response(JSON.stringify(newMovie));
// }
