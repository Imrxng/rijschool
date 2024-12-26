import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/notFound.module.css';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Pagina Niet Gevonden - Rijschool Alpha</title>
        <meta name="description" content="De pagina die je zoekt is niet gevonden. Ga terug naar de homepagina of neem contact met ons op voor meer informatie." />
        <meta name="keywords" content="404, pagina niet gevonden, rijschool, homepagina, contact" />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Pagina Niet Gevonden - Rijschool Alpha" />
        <meta property="og:description" content="De pagina die je zoekt is niet gevonden. Ga terug naar de homepagina of neem contact met ons op voor meer informatie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alpharijschool.be/404" />
      </Head>
      <div className={styles.notFound}>
        <h1>404 - Pagina Niet Gevonden</h1>
        <p>De pagina die je zoekt is niet gevonden.</p>
        <Link href="/" className={styles.backHome}>
          Ga terug naar de homepagina
        </Link>
      </div>
    </>
  );
};

export default NotFound;