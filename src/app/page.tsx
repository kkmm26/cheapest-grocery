import { metadata } from "./layout";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="border-2 border-red-500 p-4">
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
    </main>
  );
}
