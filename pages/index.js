import Head from 'next/head'
import Link from 'next/link'
import "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>static site</title>
      </Head>
      <div>Hello !</div>
      <Link href="./about">about.</Link>
      <a href="./about">about2.</a>
      <Link href="/about">about3</Link>
      <Link href="/about" as="/about">about4</Link>
      <Link href="about" as="about">about4</Link>
    </div>
  )
}
