import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-fuchsia-400 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl ">Welcome nekostore</h1>
      <Link href={"/store"} className=" bg-black text-white font-semibold text-2xl rounded-lg px-5 py-2">Go to store</Link>
    </div>
  );
}
