type GameProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: GameProps) => {
  const { id } = await params;

  return {
    title: `Game: ${id}`,
  };
};

export default async function Game({ params }: GameProps) {
  const { id } = await params;

  return <div>Game ID: {id}</div>;
}

// import { use } from "react";

// type GameProps = {
//   params: Promise<{ id: string }>;
// };

// export function generateMetadata({ params }: GameProps) {
//   const { id } = use(params);

//   return {
//     title: `Game: ${id}`,
//   };
// }

// export default function Game({ params }: GameProps) {
//   const { id } = use(params);

//   return <div>Game ID: {id}</div>;
// }
