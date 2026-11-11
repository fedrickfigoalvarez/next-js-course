import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Lets Go Men</h1>
      <Link href={"/posts"}>Posts</Link>
      <Link href={"/albums"}>Albums</Link>
    </div>
  );
}
