import Head from 'next/head';
import Link from 'next/link';
import '../styles/index.module.css';

export default function Index() {
  return (
    <div>
      <Head>
        <title>stelo</title>
      </Head>
      <Link href="./home"><a><h1>stelo</h1></a></Link>
    </div>
  )
}
