import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Head>
        <title>stelo</title>
      </Head>
      <div className='landing-page-title'>
          <Link href="/home"><a><h1>stelo</h1></a></Link>
      </div>
    </div>
  )
}
