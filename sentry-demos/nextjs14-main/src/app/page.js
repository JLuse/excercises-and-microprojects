import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
   <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/api/data">Go to API Route</Link>
    </div>
    </main>
  );
}
