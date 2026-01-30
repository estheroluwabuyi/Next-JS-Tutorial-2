import { Bebas_Neue } from "next/font/google";

const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

function Home() {
  return (
    <div className="text-black bg-white h-screen text-3xl">
      <h1>Bebas Neue</h1>
      <p className={`${bebasFont.className} uppercase`}>
        This is some random texts.
      </p>
    </div>
  );
}

export default Home;
