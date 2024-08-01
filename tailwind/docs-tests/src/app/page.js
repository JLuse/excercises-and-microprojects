import Image from "next/image";
import Flextest from "../components/Flextest.js"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <Flextest />
    </div>
    </main>
  );
}
