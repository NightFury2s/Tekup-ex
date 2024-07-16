import Head from 'next/head';
import Header from '@/components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tekup Ex 20</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="container mx-auto px-4 py-8">
        <Header />
      </main>
    </div>
  );
}
