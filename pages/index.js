import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import Images from '../components/Images';

export default function Home() {
  const url = `https://images-api.nasa.gov/search`;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search function passed to search bar
  const onSearch = async (value) => {
    // Error checking
    if (value === '') {
      setItems([]);
      return;
    }

    // Fetching data
    setLoading(true);
    const res = await fetch(url + '?q=' + value);
    let data = res.json();
    data
      .then((r) => {
        setItems(r.collection.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>See Space</title>
        <meta name="description" content="Explore the NASA database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.search}>
        <SearchBar search={onSearch} />
      </div>
      <main className={styles.main}>
        <Images data={items} loading={loading} />
      </main>
    </div>
  );
}

// <main className={styles.main}>
// <h1 className={styles.title}>
// Welcome to <a href="https://nextjs.org">Next.js!</a>
// </h1>

// <p className={styles.description}>
// Get started by editing{' '}
// <code className={styles.code}>pages/index.js</code>
// </p>

// </main>

// <footer className={styles.footer}>
// <a
// href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// target="_blank"
// rel="noopener noreferrer"
// >
// Powered by{' '}
// <span className={styles.logo}>
// <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
// </span>
// </a>
// </footer>
// </div>
